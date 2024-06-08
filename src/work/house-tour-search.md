---
title: House Tour Search
imageSrc: "https://static.stephensauceda.com/house-tour-search-1.png"
imageAlt: "House Tour Search on Apartment Therapy"
---

The first half of 2023 for my squad (the Loyalty and Retention squad) was dedicated almost entirely to elevating our House Tours experience on Apartment Therapy. One of the more obvious features we needed to provide to our users was a way to search and filter through all of our House Tours content.

Because we use a headless WordPress installation, it wasn't as straight-forward as simply searching our content archive. Instead, we used WordPress hooks to punt our House Tour data over to a new Algolia index and and, relatively easily, use that for the search and filter UI.

After the initial WordPress work was complete, the front-end of the original proof-of-concept app came together in about a day, even with building custom UI components around Algolia's functionality in React. From there, we spent some time with stakeholders tweaking design and functionality (managing state via query params so we could create shareable links to collections, making the experience embeddable in various places around the site like the homepage).

In the end, we were able to build an extremely useful feature for our users that is already proving to be a heavily-trafficked and popular feature of the site.