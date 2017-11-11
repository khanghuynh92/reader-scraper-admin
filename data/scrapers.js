import URL from 'url';

export default [{
  name: 'Bitcoin',
  source: '59b50a27f8004b67d3a041ba',
  limit: 20,
  url: 'https://news.bitcoin.com/?s=',
  scope: 'div.td-container div.td-main-content div.td-animation-stack',
  selector: {
    title: 'div.item-details a',
    description: 'div.item-details div.td-module-meta-info time',
    url: 'div.item-details a@href',
    image: 'div.td-module-thumb img@src',
  },
  map: (result) => {
    if (result) {
      const items = result.splice(0, 20);
      return items.map((item) => {
        const postUrl = URL.parse(item.url);
        return {
          url: postUrl.href,
          title: item.title,
          content: item.description,
          image: item.image,
          host: postUrl.hostname,
          path: postUrl.pathname,
        };
      });
    }
    return [];
  },
}, {
  name: 'Etherum',
  source: '59b50a27f8004b67d3a041bb',
  limit: 20,
  url: 'https://www.ethnews.com/news',
  scope: 'div.container div.all-articles article',
  selector: {
    title: 'div.article__thumbnail__info h4',
    description: 'div.article__thumbnail__social div.article__thumbnail__created',
    url: 'div.article__thumbnail__img a@href',
    image: 'div.article__thumbnail__img img@src',
  },
  map: (result) => {
    if (result) {
      const items = result.splice(0, 20);
      return items.map((item) => {
        const postUrl = URL.parse(item.url);
        return {
          url: postUrl.href,
          title: item.title,
          content: item.description,
          image: item.image,
          host: postUrl.hostname,
          path: postUrl.pathname,
        };
      });
    }
    return [];
  },
}, {
  name: 'NEO',
  source: '59b50a27f8004b67d3a041bc',
  limit: 25,
  url: 'https://www.reddit.com/r/NEO/new/',
  scope: '#siteTable div.thing',
  selector: {
    title: 'div.entry p.title',
    description: 'div.entry p.tagline time@title',
    url: 'a@href',
    image: 'a.thumbnail img@src',
  },
  map: (result) => {
    if (result) {
      const items = result.splice(0, 25);
      return items.map((item) => {
        const postUrl = URL.parse(item.url);
        return {
          url: postUrl.href,
          title: item.title,
          content: item.description,
          image: item.image,
          host: postUrl.hostname,
          path: postUrl.pathname,
        };
      });
    }
    return [];
  },
}, {
  name: 'Omisego',
  source: '59b50a27f8004b67d3a041bd',
  limit: 25,
  url: 'https://www.reddit.com/r/omise_go/new/',
  scope: '#siteTable div.thing',
  selector: {
    title: 'div.entry p.title',
    description: 'div.entry p.tagline time@title',
    url: 'a@href',
    image: 'a.thumbnail img@src',
  },
  map: (result) => {
    if (result) {
      const items = result.splice(0, 25);
      return items.map((item) => {
        const postUrl = URL.parse(item.url);
        return {
          url: postUrl.href,
          title: item.title,
          content: item.description,
          image: item.image,
          host: postUrl.hostname,
          path: postUrl.pathname,
        };
      });
    }
    return [];
  },
}, {
  name: 'Litecoin',
  source: '59b50a27f8004b67d3a041be',
  limit: 20,
  url: 'div.list-group-item-flush footer time',
  scope: 'div.main-content div.list-group-flush',
  selector: {
    title: 'div.list-group-item-flush h5',
    description: 'div.list-group-item-flush footer time@title',
    url: 'div.list-group-item-flush h5 a@href',
    image: 'div.list-group-item-flush img@src',
  },
  map: (result) => {
    if (result) {
      const items = result.splice(0, 20);
      return items.map((item) => {
        const postUrl = URL.parse(item.url);
        return {
          url: postUrl.href,
          title: item.title,
          content: '',
          image: item.image,
          host: postUrl.hostname,
          path: postUrl.pathname,
        };
      });
    }
    return [];
  },
}, {
  name: 'ZEC',
  source: '59b50a27f8004b67d3a041aa',
  limit: 25,
  url: 'https://www.reddit.com/r/zec/new/',
  scope: '#siteTable div.thing',
  selector: {
    title: 'div.entry p.title',
    description: 'div.entry p.tagline time@title',
    url: 'a@href',
    image: 'a.thumbnail img@src',
  },
  map: (result) => {
    if (result) {
      const items = result.splice(0, 25);
      return items.map((item) => {
        const postUrl = URL.parse(item.url);
        return {
          url: postUrl.href,
          title: item.title,
          content: '',
          image: item.image,
          host: postUrl.hostname,
          path: postUrl.pathname,
        };
      });
    }
    return [];
  },
}, {
  name: 'Ripple',
  source: '59b50a27f8004b67d3a041ab',
  limit: 20,
  url: 'https://ripple.com/category/insights/news/',
  scope: 'div.container main.main article',
  selector: {
    title: 'header h2',
    description: 'span.feature_meta time',
    url: 'div.blog_thumb_wrap a@href',
    image: 'div.blog_thumb_wrap img@src',
  },
  map: (result) => {
    if (result) {
      const items = result.splice(0, 20);
      return items.map((item) => {
        const postUrl = URL.parse(item.url);
        return {
          url: postUrl.href,
          title: item.title,
          content: item.description,
          image: item.image,
          host: postUrl.hostname,
          path: postUrl.pathname,
        };
      });
    }
    return [];
  },
}];