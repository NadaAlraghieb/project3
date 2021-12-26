const express = require("express");
const jwt = require("jsonwebtoken");
const userRouter = require("./api/route/userRouter");
const courseRouter = require("./api/route/courseRouter");
const db = require("./api/db")
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors())
app.use("/users", userRouter);
app.use("/course", courseRouter);
app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});
app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "Post created...",
        authData,
      });
    }
  });
});
app.post("/api/login", (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };
  // jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
  //   res.json({
  //     token
  //   });
  // });
});
// FORMAT OF TOKEN
// Authorization: Bearer <access_token>
// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}
app.listen(5000, () => console.log("Server started on port 5000"));