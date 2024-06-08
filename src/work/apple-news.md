---
title: Apple News
date: 2021-01-13
imageSrc: "https://static.stephensauceda.com/applenews.png"
imageAlt: "Apartment Therapy's Apple News properties"
---

In 2021, I was tasked with bringing Apartment Therapy Media's content to the Apple News platform. We originally used a WordPress plugin in order to publish our content to the platform, but given that ours is a headless installation of WordPress (we render the front-end of the sites with [Next.js](https://nextjs.org/)), our reliance on custom WP blocks for content and all of the various micro-services we have in between, an out-of-the-box solution wasn't going to cut it.

I set out to build a new Node service. Essentially, I took advantage of [WordPress hooks](https://developer.wordpress.org/plugins/hooks/) to post events to my new service. When the event posts to the Apple News service, it fetches the post content as JSON from a service responsible for stitching content together from all the relevant micro-services that store and manipulate our content. From there, it formats the post data into the [format Apple News](https://developer.apple.com/documentation/apple_news/apple_news_format) expects then publishes the content to the Apple News platform.

The formatting is done in a very "component-ish" way. Essentially, it's all JSON in and JSON out, but each block of content is essentially rendered by it's own function (just like React components). This way, our custom blocks can be rendered as their specific needs dictate and they can change if (when) they need to.

This was one of our first significant Node services. Most of our "back-end" services are written as Python services, but in this case, despite being a back-end service, we wanted to make the service approachable to front-end developers since they would likely be the engineers implementing new features (Apple News being the "front-end" service). With this in mind, it made sense to rely on JavaScript rather than Python and to build it in the most "front-end"-centric way.

The service has significantly increased revenue and traffic on our Apple News channels. Using the WordPress plugin, none of our custom blocks were rendered in the platform, meaning a significant amount of the post content wasn't being presented to readers. Now, effectively all of our content is rendered to Apple News providing a better user experience (Apple News content is now aligned with the content published to the actual sites) as well as providing more revenue generating opportunities due to how ads are injected into Apple News content.