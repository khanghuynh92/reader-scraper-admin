import Xray from 'x-ray';

const x = Xray();

// eslint-disable-next-line
const crawl = async ({ url, scope, selector, map }) => {
  return new Promise((resolve, reject) => {
    x(url, scope, [selector])(
      async (err, result) => {
        if (err) {
          // eslint-disable-next-line no-console
          reject([]);
        }
        const posts = await map(result);
        resolve(posts.reverse());
      });
  });
};

export default crawl;
