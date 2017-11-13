import Xray from 'x-ray';

const x = Xray();
const url = 'https://www.dashforcenews.com/?s=';
const scope = '.container .posts-blog-feed-module .paginated_page article';
const selector = {
  title: '.post-content h2',
  description: '.post-content .post-meta p span',
  url: '.post-content .post-meta p a@href',
  image: '.header img@src',
};

const crawl = () => {
  x(url, scope, [selector])(
    (err, result) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
      console.log(result);
      console.log(result.length);
    });
};

crawl();
