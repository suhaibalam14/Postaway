import PostModel from "./post.model.js";
import { users } from "../user/user.model.js";

export default class PostController {
  createPost(req, res, next) {
    const caption = req.body.caption;
    const imageUrl = "/postImages/" + req.file.filename;
    const userID = req.userID;
    const newPost = PostModel.createPost(userID, imageUrl, caption);
    res.status(200).json({
      Message: "Post created successfully :-)",
      Post: newPost,
    });
  }

  getAllPost(req, res, next) {
    const posts = PostModel.getAllPost();
    res.status(200).send(posts);
  }

  getPostById(req, res, next) {
    const postID = req.params.id;
    console.log(postID);
    const post = PostModel.getPostById(postID);
    if (post)
      res.status(200).json({
        Message: "Post found successfully :-)",
        Post: post,
      });
    else
      res
        .status(404)
        .send("The post you're looking for is not found or does'nt exist :-(");
  }

  getPostByUserCred(req, res, next) {
    const userID = req.userID;
    const posts = PostModel.getPostByUserCred(userID);
    const user = users.find((u) => u.id == userID);
    res.status(200).json({ User: user, posts: posts });
  }

  deletePostById(req, res, next) {
    const postID = req.params.id;
    const userID = req.userID;
    const post = PostModel.deletePostById(postID, userID);
    if (post)
      res.status(200).json({
        Message: "Post deleted successfully :-)",
        Post: post,
      });
    else
      res.status(400).json({
        Message: "Cannot delete post",
        Reason:
          "Either post does'nt exist or tried to delete someone else's post",
      });
  }

  updatePostById(req, res, next) {
    const postID = req.params.id;
    const caption = req.body.caption;
    const imageUrl = "/postImages/" + req.file.filename;
    const userID = req.userID;
    const updatedPost = PostModel.updatePostById(
      postID,
      userID,
      imageUrl,
      caption
    );
    if (updatedPost)
      res.status(200).json({
        Message: "Post updated successfully :-)",
        Post: updatedPost,
      });
    else
      res.status(200).json({
        Message: "Post can't be updated :-(",
        Reason:
          "Either post does'nt exist or tried to update someone else's post",
      });
  }
}
