const express = require("express");
const session = require("express-session");
const randomBytes = require("random-bytes");

const generateSecret = () => randomBytes.sync(64).toString();

const app = express();

// Heroku puts our server behind a proxy.
app.set("trust proxy", true);

app.use(
  session({
    // `secret` is required.
    secret: process.env.SESSION_SECRET || generateSecret(),
    cookie: {
      // `httpOnly` disallows access to cookies from JavaScript in order to
      // protect against cross-site scripting (XSS) attacks.
      httpOnly: true,
      // `secure` ensures cookies are only sent over HTTPS.
      secure: process.env.NODE_ENV === "production",
    },
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  res.send(
    `<h1>Session</h1>
    <pre>${req.session.id}</pre>
    <h2>Session data</h2>
    <pre>${JSON.stringify(req.session, null, 2)}</pre>
    <h2>Headers</h2>
    <pre>${JSON.stringify(req.headers, null, 2)}</pre>`
  );
});

module.exports = app;
