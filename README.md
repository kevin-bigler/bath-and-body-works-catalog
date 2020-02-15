# Bath & Body Works Catalog

scrapes, archives, and serves B&BW products, such as scented 3-wick candles.

personal inventory and wishlist management, and helpful product lookup tools

## Vernacular

- Crawler &ndash; Traverses pages, ie finds where to go next until all desired pages have been loaded ("next pages").
- Scraper &ndash; Given HTML page, get values of interest.
- Page &ndash; HTML, type, and optionally URL

Per **Page Type**, I want >= 0 **Crawler** and >= **Scraper**.

**Bath & Body Works Stuff**

- Catalog &rarr; Product
- Inventory &rarr; Item

"A catalog has products; an inventory has items."

- Product &ndash; Catalog entry. Describes something that can be bought. Ex: a type of 3-wick candle B&BW says I can buy somewhere (but not a particular one).
- Item &ndash; Physical. A product _"instance."_ Ex: a 3-wick candle in my cupboard or on a store shelf.

An **item** _is a_ **product**, but with additional _physical_ traits.