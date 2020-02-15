const config = require('config');

// load start page from URL
// based on start page's page type, get crawlers and scrapers
// run crawlers and scrapers
// rinse, repeat

const candleScrapeConfig = config.get('scrapes.all-candles');
const startPage = candleScrapeConfig.start;

/**
 * runs crawlers and scrapers for a given page
 * // TODO: what to return? how to save results? what format and where?
 * @param {Object} page
 * @param {string} page.url
 * @param {string} page.type
 */
const processPage = async ({url, type}) => {
    // get page HTML using url
    const html = await getPageHtml(url);

    // get scrapers for page type
    // run scrapers given HTML

    // get crawlers for page type
    // run crawlers given HTML
};