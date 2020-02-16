const config = require('config');
const getPageHtml = require('./getPageHtml');
const getScrapers = require('./getScrapers');
const getCrawlers = require('./getCrawlers');





/**
 * runs crawlers and scrapers for a given page
 * // TODO: what to return? how to save results? what format and where?
 * @param {Object} page
 * @param {string} page.url
 * @param {string} page.type
 * @param {boolean} [processNextPages] Optional. Defaults to true. Determines whether this only processes one page or goes deeper
 */
const processPage = async ({url, type}, processNextPages = true) => {
    // get page HTML using url
    const html = await getPageHtml(url);

    const scrapers = getScrapers(type);
    const dataOfSomeKind = scrapers.map(scraper => scraper.scrape(html));

    const crawlers = getCrawlers(type);
    // array of {url, type}
    const nextPages = crawlers.map(crawler => crawler.crawl(html));
    // TODO: ensure pages only get processed once per "crawl session"

    const nextDatas = processNextPages ? nextPages.map(processPage) : [];

    return [...dataOfSomeKind, ...nextDatas];
};

const main = async () => {
    // load scrape config
    // start scrape session (what does this mean?)
    // load start page from URL
    // based on start page's page type, get crawlers and scrapers
    // run crawlers and scrapers
    // rinse, repeat
    const candleScrapeConfig = config.get('scrapes.all-candles');
    const startPage = candleScrapeConfig.start;

    const data = processPage(startPage);
    console.log(data);
    // store the data (?)
};


















