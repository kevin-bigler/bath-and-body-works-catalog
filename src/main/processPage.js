const getPageHtml = require('./getPageHtml');
const getScrapers = require('./getScrapers');
const getCrawlers = require('./getCrawlers');

/**
 * @typedef {Object} Page
 * @property {string} url
 * @property {string} type
 */

/**
 * runs crawlers and scrapers for a given page
 *
 * @param {Object} page
 * @param {string} page.url
 * @param {string} page.type
 * @return {{data: *, nextPages: [Page]}}
 */
const processPage = async ({url, type}) => {
    // get page HTML using url
    const html = await getPageHtml(url);

    const scrapers = getScrapers(type);
    // not sure this data type(s)
    const data = scrapers.map(scraper => scraper.scrape(html));

    const crawlers = getCrawlers(type);
    // array of {url, type}
    const nextPages = crawlers.map(crawler => crawler.crawl(html));

    return {data, nextPages};
};

module.exports = processPage;
