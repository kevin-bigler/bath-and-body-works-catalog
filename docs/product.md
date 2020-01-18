# Product

We are collecting and serving products of various types, with several properties of interest per product.

Properties may vary by product type.

Categories/hierarchy?

## Properties

### 3-Wick Candles

On the product page, like [this one](../resources/example_product_page_3_wick_candle.html), we want these properties:

| Property | Example | Selector | itemprop |
| --- | --- | --- | --- |
| URL | https://www.bathandbodyworks.com/p/vanilla-bean-noel-3-wick-candle-024580338.html?cgid=3-wick-candles | div.product-detail > div.product-content > .visually-hidden | url |
| UPC | 667551662134 | <Get from Ingredients URL> | |
| name | Vanilla Bean Noel | div.product-detail > h1.product-name | name |
| image URL | https://www.bathandbodyworks.com/dw/image/v2/BBDL_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb39e4024/hires/024580338.jpg?sh=471 | div.product-primary-image > img.primary-image => .src | image |
| type | 3-Wick Candle | div.product-detail > .small-title | |
| price | $24.50 | div.product-detail > div.product-content > div.product-price > .price-standard | |
| sale price | Now $10.50 | div.product-detail > div.product-content > div.product-price > .price-sales (> .promo-word "Now" & el.content "10.5") | price (maybe this changes depending on if it's on sale -- check other examples!) |
| in stock / out of stock (availability/available?) | In Stock | | |
| fragrance | This is what Christmas smells like: Vanilla Bean, Marshmallow Fluff, Vanilla Cake with Essential Oils | | |
| overview | It's the spirit of Christmas wrapped in our cozy... | | |
| more info | To prevent fire and serious injury:... | | |
| description | <fragrance, overview, and more info> | | |
| category/bundle/group | Best Christmas Candles | | |
| ingredients URL | https://www.bathandbodyworks.com/e/product-ingredients?q=667551662134&cm_sp=PDP-_-Ingredients-_-Ingredients | | |
| weight | 14.5 oz / 411 g | | |
| rating | Vanilla Bean Noel 3-Wick Candle is rated 4.0 out of 5 by 148. | | |
| snapshot date | <ISO_8601 Datetime, UTC> | | |

Look into https://schema.org/Offer (itemprop=offers)
- price / content
- priceCurrency / content
- availability / href

TODO: Note which props are ephemeral, eg sale price & availability (is that it?)