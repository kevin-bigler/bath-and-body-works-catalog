const scrapers = {
    CandleSearch: [],
    CandleDetails: []
};

/**
 *
 * @param pageType
 * @return {[*]}
 */
const getScrapers = (pageType) => {
    return scrapers[pageType];
};

module.exports = getScrapers;