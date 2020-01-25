# Crawler

Traverses pages, ie finds where to go next until all desired pages have been loaded

## Requirements / Specs

1. start page/start URL
1. next-URL-grabbers/scrapers
    - specific to the page, so we don't just traverse every link everywhere -- only what we want
    - different URL scrapers per page-type (eg search page, detail page)
    - results should be unique, ie remove duplicates

**Goal:** Given a URL (or HTML page) and page type, get all URLs _(again, all **desired** URLs)_

**Problem:** How to tell what page type a page is? for the "next pages" -- should the URL scrapers say so? like return {URL, pageType} objects?
or surmise it from the HTML/URL?

- Link Scrapers - Given HTML and page type, scrapes and returns relevant URLs and their page types
- Page Scrapers - Given a URL (or HTML) and page type, scrapes and returns properties

## 3-Wick Candles

**Start**
https://www.bathandbodyworks.com/c/home-fragrance/3-wick-candles

**Product Tiles' Links**
`div#main > div.search-result-content > ul#search-result-items > li > div.product-tile a.product-tile-link <<el.href>>`

**Product Tiles' Links - Scraper**
Product Details Page scraper

**Search Page Pagination Links**
`div#main > div.search-result-options.bottom > div.pagination > ul > li(not=.current-page)`

**Search Page Pagination Links - Scraper**
Product Search Page scraper