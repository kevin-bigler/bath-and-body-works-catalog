const config = require('config');
const processPage = require('./processPage');

const main = async () => {
    // load scrape config
    // start scrape session (what does this mean?)
    // load start page from URL
    // based on start page's page type, get crawlers and scrapers
    // run crawlers and scrapers
    // rinse, repeat
    // how to save results? what format and where?
    // TODO: ensure pages only get processed once per "crawl session"
    const candleScrapeConfig = config.get('scrapes.all-candles');
    const startPage = candleScrapeConfig.start;

    const data = processPage(startPage);
    console.log('scraped data:', JSON.stringify(data, null, 2));
    // store the data (?)
};


















