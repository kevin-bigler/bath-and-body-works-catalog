const scrapers = require('./scrapers');

/**
 *
 * @param {string} pageType
 * @return {[Scraper]}
 */
const getScrapers = (pageType) => {
    return scrapers[pageType];
};

module.exports = getScrapers;
