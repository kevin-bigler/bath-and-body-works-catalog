const axios = require('axios');

const getPageHtml = async (url) => {
    return axios.get(url);
};

module.exports = getPageHtml;
