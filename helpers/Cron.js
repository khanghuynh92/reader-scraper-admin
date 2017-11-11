import Fetch from 'node-fetch';
import { CronJob } from 'cron';
import Crawl from './Crawl';
import Post from '../models/post';
import logging from './Log';

import Scraper from '../models/scraper';
import scraperData from '../data/scrapers';

const scraperJobs = new Map();

const addCronJob = ({ _id, frequency, baseUrl, version }) => {
  const scraperId = _id.toString();
  if (scraperJobs.has(scraperId)) {
    scraperJobs.get(scraperId).stop();
    scraperJobs.delete(scraperId);
  }

  scraperJobs.set(scraperId, new CronJob(frequency, async () => { // eslint-disable-line
    try {
      await Fetch(`${baseUrl}/${version}/fetch`);

      logging({
        scraper: _id,
        type: 'requestData',
        status: 'success',
      });
    } catch (err) {
      logging({
        scraper: _id,
        type: 'requestData',
        status: 'failed',
      });
    }
  }, null, true, 'Asia/Ho_Chi_Minh'));
};

const removeCronJob = ({ _id }) => {
  const scraperId = _id.toString();
  if (scraperJobs.has(scraperId)) {
    scraperJobs.get(scraperId).stop();
    scraperJobs.delete(scraperId);
  }
};

// health cron
const healthCheck = () => {
  setInterval(async () => {
    try {
      const query = {
        isDeleted: false,
      };

      const scrapers = await Scraper.list({
        query,
      });

      scrapers.forEach(async (scraper) => {
        const record = {
          scraper: scraper._id,
          type: 'healthCheck',
          status: 'failed',
        };
        try {
          const res = await Fetch(`${scraper.baseUrl}/health`);
          if (res.ok) record.status = 'success';
        } catch (err) {
          // eslint-disable-next-line no-console
          console.log(err);
          // remove cron
          removeCronJob(scraper);
        }
        logging(record);

        scraper.extend({
          status: record.status,
        }).updateByUser();
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }, 60 * 1000);
};

// fetch cron
const fetch = async () => {
  try {
    const query = {
      isDeleted: false,
    };

    const scrapers = await Scraper.list({
      query,
    });

    scrapers.forEach((scraper) => {
      addCronJob(scraper);
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

// create posts
const createPosts = async (posts, source) => {
  for (const { title, content, image, url, host, path } of posts) {
    const post = await Post.findOne({
      isDeleted: false,
      host,
      path,
    }).exec();
    if (!post) {
      const newPost = new Post({
        title,
        content,
        image,
        url,
        host,
        path,
        source,
      });
      await newPost.createByUser();
    } else {
      post.created.at = new Date();
      await post.updateByUser();
    }
  }
};

const fetchCustom = async () => {
  const promises = scraperData.map(async ({ url, scope, selector, map, source }) => {
    // config``
    const config = {
      url,
      scope,
      selector,
      map,
    };

    const posts = await Crawl(config);
    createPosts(posts, source);
  });

  await Promise.all(promises);
};

// fetch custom
const fetchInterval = async () => {
  setInterval(async () => {
    fetchCustom();
  }, 3 * 60 * 60 * 1000); // 1 hour
};

export {
  addCronJob,
  healthCheck,
  fetch,
  fetchInterval,
  fetchCustom,
};
