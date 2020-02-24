const crawlers = require('./crawlers');

/**
 *
 * @param {string} pageType
 * @return {[Crawler]}
 */
const getCrawlers = (pageType) => {
    return crawlers[pageType];
};

module.exports = getCrawlers;
