---
title: Building a New House
date: 2022-10-30
imageSrc: https://images.unsplash.com/photo-1572120360610-d971b9d7767c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDN8fEhvdXNlfGVufDB8fHx8MTY2NzE1Nzk4NQ&ixlib=rb-4.0.3
imageAlt: A house in the fall
tags:
  - web development
---

A couple days ago, I (once again) moved my personal site around. I actually had it hosted on Tumblr for the passed couple of months for some reason. Well, it was actually because my site is incredibly simple and Tumblr is free so, win. But yesterday, I decided to create the world's simplest [Ghost](https://ghost.org/) theme and self-host it on [DigitalOcean](https://www.digitalocean.com/). It's not free, but it's cheap, it gives me a place to mess around with new things and, perhaps most importantly, it's ["mine"](https://mastodon.social/@matthiasott/109257835234589193) (as much as it can be without running a server in my closet).

I've been dug into the React/Next.js life for a long time, so it's been nice to branch out a bit. A site like mine probably screams "JAMSTACK!!" to most JavaScript developers these days but honestly, it's all more trouble than it's worth, at least for my own personal site. The problem with API-first CMSs (like, say, [Prismic](https://prismic.io/), which I've used before or Contenful or whatever) is you end up building "blocks" from scratch. The problem with CMSs like WordPress, Ghost (in a Jamstack sense) or others, is you have to host them somewhere. So you either pay for their hosted versions or you have to pay for a server somewhere anyway (and in addition to wherever you pay to host the view layer). And in a lot of cases, you end up having to `__dangerouslySetInnerHTML` for large swaths of content, which has always rubbed me the wrong way. One of the great parts of Jamstack, is that it's supposed to give you flexibility in the view layer. But if everything is just `__dangerouslySetInnerHTML` you lose a lot of that flexibility.

So I pretty much knew I was going to go with the ole tried and true full CMS option (using a CMS for both the data and the experience). You can make just about any of them fast (you may have to work harder in some more than others though). What I like about Ghost is that it isn't trying to be everything to everyone. They even tell you if you're looking to customize all kinds of stuff to use WordPress instead. With Ghost, it's all about publishing and putting shit out there - which is the goal for me. I'll probably fail. It's been [two years](https://stephensauceda.com/archive/i-am-everything-right-now/) since I wrote anything of any (relative) substance after all.

But, it's only failure if you don't learn anything. And, just in the passed couple of days, I've learned a lot while plugging this new site into the wall. So even if I don't publish a post after this one for another two years, I already consider it a win.
