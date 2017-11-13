import Xray from 'x-ray';

const x = Xray();
const url = 'https://www.ethnews.com/news?search=a';
const scope = 'div.container div.news__bottom div.article-thumbnail';
const selector = {
  title: 'div.article-thumbnail__info h2 a',
  description: 'div.article-thumbnail__info div.article-thumbnail__info__etc__date h6',
  url: 'div.article-thumbnail__info h2 a@href',
  image: 'div.article-thumbnail__cover img@src',
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
