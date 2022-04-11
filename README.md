# Posterr - Matheus Possas

Strider Web Front-end Assessment - 2.2

## Getting Started

- Install [Node LTS](https://nodejs.org/en/)
- Install dependencies: 
``` bash
$ npm i
```

## Running

``` bash
$ npm start
```
- Open http://localhost:3000/

## Planning

### Questions for the Product Manager

1. Can I reply to my own posts?
2. Can I reply a reply?
3. Do replies count towards the daily post limit?

### How I would solve this problem

- Create a "Reply" component to display the "Replying to @username"
- Assuming I can reply a reply, add a "reply" action, indicated by a comment icon, to the "Post" and "Reply" components.
- Assuming a user cannot reply to their own posts, the post actions are already hidden for them.
- The "reply" action opens a modal similar to the quote-post, showing a text-area and the original post, but the "Post" button would display "Reply" and save a new post of type "reply".
- Create a new service to filter posts by a user ID and "post" and "reply" types. These posts would appear in the new "Posts and Replies" feed.
- Adjust the other services that return posts to ignore "reply" type posts.
- Assuming replies count towards the daily post limit, they would already be counted.

## Critique

If I had more time, I would have just downloaded the icons I use instead of the entire fontawesome-free library. I would have also added unit tests to the project.

If this project were to grow, I believe the daily limit of five posts would be an obstacle. It would have to at least disregard reposts.

In a real-life situation, the project could use NuxtJS for SSR. The service layer would be handled by a server with superior computing power. The content could also be cached by a CDN like Amazon CloudFront, providing a faster and more consistent website for the user.


