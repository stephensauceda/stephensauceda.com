---
title: Topic Following
date: 2021-01-14
imageSrc: "https://static.stephensauceda.com/topic-following-1.png"
imageAlt: "Topic following on Apartment Therapy"
---

Topic Following was one of the first projects I participated in as part of our Loyalty and Retention squad. The squad's purpose is to keep users coming back and (ideally) registering for an account.

Topics themselves are simply posts organized as a collection of categories and tags (the "Holidays" topic is a roll-up of posts tagged with "christmas", "thanksgiving", etc). I was able to quickly implement the feature by creating a JSON mapping for each topic to its relevant categories and tags and storing the user's followed topics on their user profile. Then, in each place we want to render content based on their topics, it's a relatively simple lookup in the JSON document and stitching a few slugs into URL params to fetch content based on those categories and tags.

Topic Following has been a significant driver of new accounts and provides a more personalized experience for users who visit Apartment Therapy.