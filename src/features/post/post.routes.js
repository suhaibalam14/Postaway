import express from "express";
import PostController from "./post.controller.js";
import { uploadFile } from "../../middlewares/fileUpload.middleware.js";
import createPostValidator from "../../middlewares/createPost.validator.js";
import updatePostValidator from "../../middlewares/updatePost.validator.js";

const postRouter = express.Router();

const postController = new PostController();

postRouter.post(
  "/createPost",
  uploadFile.single("imageUrl"),
  createPostValidator,
  postController.createPost
);
postRouter.get("/getAllPosts", postController.getAllPost);
postRouter.get("/userCred", postController.getPostByUserCred);
postRouter.get("/:id", postController.getPostById);
postRouter.delete("/:id", postController.deletePostById);

postRouter.put(
  "/:id",
  uploadFile.single("imageUrl"),
  updatePostValidator,
  postController.updatePostById
);

export default postRouter;
