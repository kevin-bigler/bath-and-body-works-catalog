const candleSearchPageScraper = require('./candle-search-page-scraper');
const candleDetailsPageScraper = require('./candle-details-page-scraper');

/**
 * Given HTML, return data of interest found in said HTML
 * @typedef {function(string): *} Scraper
 */

/**
 * maps PageType to Scraper[]
 * @type {Object}
 */
const scrapers = {
    CandleSearch: [candleSearchPageScraper],
    CandleDetails: [candleDetailsPageScraper]
};

module.exports = scrapers;
