---
title: The Cure ("I Did It")
date: 2021-01-13
imageSrc: "https://static.stephensauceda.com/the-cure.png"
imageAlt: "Apartment Therapy's \"The Cure\" Program"
---

Towards the end of 2022, Apartment Therapy wanted to provide a bit more utility around our seasonal "Cures". Each Cure is a collection of posts (and emails) that users progress through on a daily basis. In order to make the experience more "sticky" with users, we wanted to allow them to track their progress through each Cure.

To allow this, we mapped out "programs" that have "tasks" associated with them. Each task can then have a resource associated with it. Currently, the only resources in use are posts but the system was built in such a way as to allow resources to be any media type like photos or videos.

From there, we just store the completed task ID on the user profile. If we need program or resource information for the task, we can query that based on the task ID.

I was instrumental in helping plan the backend APIs and built all of the front-end work using GraphQL and React for the post page button for individual tasks and the user profile page that tracks the user's progress across all active Cures.