# Crawler

Traverses pages, ie finds where to go next until all desired pages have been loaded

## Requirements / Specs

1. start page/start URL
1. next-URL-grabbers/scrapers
    - specific to the page, so we don't just traverse every link everywhere -- only what we want
    - different URL scrapers per page-type (eg search page, detail page)

**Goal:** Given a URL (or HTML page) and page type, get all URLs _(again, all **desired** URLs)_

**Problem:** How to tell what page type a page is? for the "next pages" -- should the URL scrapers say so? like return {URL, pageType} objects?
or surmise it from the HTML/URL?
