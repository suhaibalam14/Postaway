import express from "express";
import bodyParser from "body-parser";
import usersRouter from "./src/features/user/user.routes.js";
import postRouter from "./src/features/post/post.routes.js";
import commentRouter from "./src/features/comments/comment.routes.js";
import likeRouter from "./src/features/likes/like.routes.js";
import jwtAuth from "./src/middlewares/jwt.middleware.js";

const app = express();

//parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Welcome to ExpressJS Postaway server :-)");
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//api's routes

app.use("/api/users", usersRouter);
app.use("/api/posts", jwtAuth, postRouter);
app.use("/api/comments", jwtAuth, commentRouter);
app.use("/api/likes", jwtAuth, likeRouter);


app.listen(4200, () => {
  console.log("Server is listening at http://localhost:4200");
});
