import Xray from 'x-ray';

const x = Xray();
const url = 'https://ltc-aggr.com/';
const scope = 'div.main-content div.list-group-flush';
const selector = {
  title: 'div.list-group-item-flush h5',
  description: 'div.list-group-item-flush div.main-post footer time@datetime',
  url: 'div.list-group-item-flush h5 a@href',
  image: 'div.list-group-item-flush img@src',
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
