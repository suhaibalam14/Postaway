import express from "express";
import CommentController from "./comment.controller.js";

const commentController = new CommentController();

const commentRouter = express.Router();

commentRouter.post("/:id", commentController.createComment);
commentRouter.get("/:id", commentController.readComment);
commentRouter.put("/:id", commentController.updateComment);
commentRouter.delete("/:id", commentController.deleteComment);

export default commentRouter;
