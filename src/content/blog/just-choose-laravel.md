---
pubDate: 2023-11-17
title: You Should Just Choose Laravel
featured: true
draft: false
tags:
    - laravel
    - bootstrap
    - javascript
heroImage: "/images/justchooselaravel.png"
description: "Sometimes the JavaScript can be frustrating and you just want to be told how to do the things you need to do."
---

The JavaScript framework world has had a lot of popular blog posts written recently that seem to have strong voices and even stronger opinions. There are a lot of smarter developers than me who tell you that you should [Just use Next.js](https://leerob.io/blog/using-nextjs) or that you [shouldn’t use Next.js.](https://www.epicweb.dev/why-i-wont-use-nextjs)

I don’t think this is a bad thing. The JavaScript ecosystem could use a few more strong opinions, especially when it comes to features and best-practices within the multiple frameworks that span the JavaScript world.

## I used to only know JavaScript.

I started *really* building in JavaScript shortly after React started getting popular. I’d like to think that I learned, built, and lived in the ‘golden age’ of JavaScript. Riding the wave, I witnessed Gatsby's rise (*and fall?*) and experienced the versatility of tools like Firebase, Supabase, and Next.js, among others.

But two years ago, I decided to shake things up and step into the world of Laravel, prompted by a [Tweet by Chris Sev](https://x.com/chris__sev/status/1517113827778654215?s=20). Quite simply. I love magic. I love being told how to write certain parts of my code. And I love having a batteries-included framework with a community and ecosystem that seemed to have everything else I could possibly need.

## Why Laravel?

You might be wondering, why Laravel? After all, the PHP-based Laravel has been out there for ages, and JavaScript frameworks, while a dime a dozen, are *blazing* fast. But here’s the catch: Laravel doesn't need me to be a PHP guru. I wield a modest command over PHP, just enough to scrape by. But when it matters, Laravel has my back. The Laravel framework, coupled with its rich ecosystem, accelerates my process of building functional side-projects effectively.

**Now, if you're head over heels in love with the JavaScript ecosystem — you have a knack for piecing together a variety of tools spanning different packages, libraries, and templates — by all means, stick with JavaScript.**

However, if the continual learning curve and the perpetual addition of a new tool to your toolkit to add a feature to your app is ever overwhelming, I think it's time to turn to Laravel.

## The Four Pillars of Laravel

Here are four compelling reasons to consider Laravel, especially if you're feeling disoriented navigating your current tech stack or don't vibe with the JavaScript ecosystem:

### 1. User and Team Account Setup Speed

![](https://cdn.videotap.com/AJgL4vcdU3yezteqYK6S-224.08.png)You may be familiar with NextAuth or Auth.js and other tools for authentication. They're great, I must admit. But there's a nuance to using them - extra boilerplate, uncertainties with having everything you need for a particular circumstance. Laravel simplifies this with a first-party add-on named Laravel Breeze. It comes bundled with a scaffolded auth out of the box, complete with features such as token management.

### 2. Subscription Integrations

![](https://cdn.videotap.com/e0yXlMMBbF5h8NLG8Q5G-385.85.png)The Indie Hacker’s dream is to build a SaaS that makes money while you sleep, right? I think most people realize that’s not actually how it works, but you also still need to have a way to set up payments so that you can at least *try* to make it happen. Laravel empowers you with [Laravel Spark](https://spark.laravel.com), a first-party package that facilitates interactions with Stripe. With minimal setup, you gain access to a billing portal that you can brand with your aesthetics. This means, that with minimal code, you can have a clean and simple way of knowing who is subscribed and who isn’t and show relevant parts of your application with ease.

```php
if (auth()->user()->currentTeam->subscribed) {
    // then do what we need
} else {
    // well looky there, they aren't subscribed
}
```
### 3. Emails, Queues, and Cron Jobs

I was shell-shocked the first time I learned that the Jamstack and serverless JavaScript I had learned was incredibly difficult to work with when it came to running a process longer than 15ish seconds. Laravel has you covered with its built-in convenience for managing these aspects. Sure, there are plenty of external services to tackle these issues within JavaScript, but the elegance lies in Laravel's all-inclusive framework.

### 4. Community and Third-Party Tooling

Lastly, the Laravel community has blossomed immensely over the years, leading to a treasure trove of third-party packages. Companies like [Spatie](https://spatie.be/open-source) have a tool for every Laravel necessity you could think of! Want an activity log? XML reader? Backup solutions? Laravel’s got it!

## Laravel: An All-Rounder?

The great part about Laravel is that the framework doesn’t care what you do with the actual view layer of the application. In fact, it has first-party support for React, Vue, Svelte, or even a Next.js API template. You can enjoy the best of both worlds with Laravel!

There’s a lot more that Laravel has to offer when it comes to the amount of

To echo in Aaron Frances' words, "Just take a look at all of the first-party packages that Laravel ecosystem has to offer right on their website...You can just find it all on one documentation source."

As a developer, I relish the anticipation Laravel provides, bundling what I need for a project without having to search elsewhere. It's secure, robust, and, most importantly, developer-friendly.

If Laravel's holistic approach resonates with you, if you're tired of scavenging for packages within the JavaScript framework to execute 'basic' tasks, or you are simply adventurous enough to try a new framework and language, it's time for a gear switch - choose Laravel!


## As a YouTube video
If watching instead of listening is your thing, you're in luck!
    <iframe class="w-full aspect-video rounded-lg mt-8" src="https://www.youtube.com/embed/iSS_9PHrQg0?si=Bi-nGVLX5Oe4ILsp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
