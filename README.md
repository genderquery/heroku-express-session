# heroku-express-session

An example of hosting an [Express server](https://expressjs.com/) using
[`express-session`](https://www.npmjs.com/package/express-session) on
[Heroku](https://heroku.com/).

A Heroku dyno using the Common Runtime [can only be reached via web requests
forwarded from the router to web
processes](https://devcenter.heroku.com/articles/dynos#common-runtime-networking).
The application variable [`trust
proxy`](http://expressjs.com/en/guide/behind-proxies.html) must be configured to
trust the IP given by the router.
