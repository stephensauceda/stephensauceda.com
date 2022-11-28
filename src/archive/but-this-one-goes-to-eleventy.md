---
title: But This One Goes To Eleventy
date: 2022-11-27
imageSrc: https://www.11ty.dev/img/logo-github.svg
imageAlt: The Eleventy logo
---

So, [this post](https://stephensauceda.com/archive/building-a-new-house/) is out of date now. I've just finished making this site an [Eleventy](https://11ty.dev) site. In the process, I've (somewhat obviously) changed some opinions I spouted in that post. Let's go through some of them:

### "JAMSTACK!!"

> A site like mine probably screams "JAMSTACK!!" to most JavaScript developers these days but honestly, it's all more trouble than it's worth

There is, of course, a difference between a "Jamstack" site and just a regular ole static site but here I was kind of lumping them all in together. I was speaking mostly to the idea of "have a CMS over here, a static site over here and an API in-between" kind of thing. _That_ is more trouble than it's worth for an extremely simple, rarely updated site like mine. However, with Eleventy (and really, quite a few SSGs) just throwing some Markdown files into a directory is `:chef_kiss:` just fine.

### __dangerouslySetInnerHTML

> And in a lot of cases, you end up having to __dangerouslySetInnerHTML for large swaths of content, which has always rubbed me the wrong way. 

This one I stand by, but again, I was sort of painting with broad strokes (something I do quite often). I was once again referencing the idea of a CMS as an API (or in the case of Next.js, it's "OTB" ways of dealing with Markdown/MDX, or at least the ones I've come across). This also assumes I wanted to use React. Which, I did. But I got over it. I love React. But once I let it go to move on to the convenience of using a full-on CMS like Ghost, it was easier to let go of the idea of COMPONENTS FOR EVERYTHING!!!

Eleventy (and other SSGs) don't do `__dangerouslySetInnerHTML` because, wait for it, it don't use React. And since the long-prevailing idea of my personal site has been "sparse, almost-brutally so" amounts of CSS, I don't know why I was so hellbent on components anyway. A content-driven site (like a blog) isn't going to have a ton of functionality, so components only really stand to scope styles. But here's the thing. This is the entirety of the "custom css" I've written for this site:

```css
body {
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 15rem), url('/assets/images/funky-lines.png');
}
```

That's it. Everything else comes from [Tailwind](https://tailwindcss.com/). Yep, I'm one of _those_ guys. We'll all survive.

### Ghost

> What I like about Ghost is that it isn't trying to be everything to everyone.

I still stand by this. I love Ghost. Like, _really_ love Ghost. If I needed it's features, it would be worth keeping around. But, I don't. As much as I'd like to be that guy putting out newsletters, having a multi-tiered membership experience and whatnot, I'm not. Maybe once I become a Thought Leader &trade; but right now, I don't need a lot of the features Ghost offered.

One that I did enjoy was Ghost's editor and cards. It was nice to not have to worry about marking up different bits of content and having OAuth to handle unfurling links and things. Super great. A+. I will miss it.

Also, I sort of love the way that Ghost has been implementing a lot of features across all their themes, including custom one-off themes. Things like comments and search and membership is all handled via magic `data=*` attributes and url schemes. It's pretty damn great. Can you customize a lot of that stuff? No. But being able to [navigate to](https://ghost.org/help/search/) `#/search` for a great search or drop a template tag with [some attributes](https://ghost.org/docs/themes/helpers/comments/#examples) to get an entire commenting experience is just slick.

In other words, if I can ever justify using more of Ghost's features, you can bet I won't hesitate to get it running again.

### Cost

> It's not free, but it's cheap,

The great thing about a static site is you don't need a server. If you don't need a server, you (usually) don't have to pay anyone to host your server. With things like [Github Pages](https://pages.github.com/), [Vercel](https://vercel.com) and [Cloudflare Pages](https://pages.cloudflare.com/) (where I'm hosting this now - spoiler, it's pretty sweet), you generally don't have to pay to stick a static site on the Internet somewhere. Again, is it the most customizable thing? No. But, with the rise of [Github Actions](https://github.com/features/actions), [Cloudflare Workers](https://workers.cloudflare.com/), [Firebase functions](https://firebase.google.com/docs/functions), etc. etc, there is much more customizability than you'd think.

For example, this site is a static Eleventy site, sure. But I also wrote a function to handle [Micropub](https://indieweb.org/Micropub). Because one of the bummer's about a Git-based blogging solution like a lot of these static site generators are (you have to create a Markdown file in order to create a post) is that you kinda need to be at a computer to publish a post (create the file, check it into git, push it to a repo, etc). With Micropub, I can use a client on my iPad (I'm using [Drafts](https://getdrafts.com/) at the moment) to write up a post, have the app punt the content over to the function and have the function create the file in the Github repo. Sound complicated? It kind of is. But it's cool. And one more [IndieWeb](https://indieweb.org/) checkbox checked.

### Conclusion

> it's only failure if you don't learn anything

So yeah, I can't leave well enough alone. Welcome to my world. I literally went from, "I should check out Eleventy" to "rebuilding my site with it, brb" pretty much immediately. It's more flexible, more indie and cheaper than the other stack. And to top it all off, I learned some new stuff with it, which I said in the original post, was the whole freaking point to begin with. I'm pretty stoked on this setup. Until I come across something else shiny and new. LOL
