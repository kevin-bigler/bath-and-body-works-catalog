const { inspect } = require('util');
const axios = require('axios');

const getPageHtml = async (url) => {
    return axios.get(url);
};

getPageHtml('https://www.bathandbodyworks.com/c/home-fragrance/3-wick-candles').then(response =>
console.log(response.data.substring(0, 300).replace(/\n\n/g, '').length));

module.exports = getPageHtml;