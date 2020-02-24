const candleSearchProductTilesLinksCrawler = require('./candle-search-product-tiles-links-crawler');
const candleSearchPaginationCrawler = require('./candle-search-pagination-crawler');

/**
 * Given HTML, return data of interest found in said HTML
 * @typedef {function(string): *} Crawler
 */

/**
 * maps PageType to Crawler[]
 * @type {Object}
 */
const crawlers = {
    CandleSearch: [
        candleSearchProductTilesLinksCrawler,
        candleSearchPaginationCrawler
    ],
    CandleDetails: []
};

module.exports = crawlers;
