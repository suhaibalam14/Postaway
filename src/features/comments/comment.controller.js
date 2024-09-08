import CommentModel from "./comment.model.js";

export default class CommentController {
  createComment(req, res, next) {
    const content = req.body.content;
    const postID = req.params.id;
    const userID = req.userID;
    console.log(userID);
    const newCommentobj = CommentModel.addComment(userID, postID, content);
    if (newCommentobj) {
      res.status(200).json({
        Message: "Comment added successfully to the post :-)",
        Comment: newCommentobj,
      });
    } else {
      res.status(200).json({
        Message:
          "The post you're looking for is not found or doesn't exist :-(",
      });
    }
  }

  readComment(req, res, next) {
    const postID = req.params.id;
    const postComments = CommentModel.getcommentsbyID(postID);
    if (postComments) {
      res.status(200).json({
        Message: "Comments found successully:-)",
        PostComments: postComments,
      });
    } else {
      res.status(200).json({
        Message:
          "The post you're looking for is not found or doesn't exist :-(",
      });
    }
  }
  updateComment(req, res, next) {
    const commentID = req.params.id;
    const content = req.body.content;
    const userID = req.userID;
    const updatedComment = CommentModel.updateComment(
      commentID,
      userID,
      content
    );
    if (updatedComment) {
      res.status(200).json({
        Message: "Comment updated successfully :-)",
        Comment: updatedComment,
      });
    } else {
      res.status(200).json({
        Message:
          "Comment not found or does'nt exist and you also can't delete someone else's comment :-(",
      });
    }
  }

  deleteComment(req, res, next) {
    const commentID = req.params.id;
    const userID = req.userID;
    const deletedComment = CommentModel.deleteComment(commentID, userID);
    if (deletedComment) {
      res.status(200).json({
        Message: "Comment deleted successfully :-)",
        CommentObj: deletedComment,
      });
    } else {
      res.status(200).json({
        Message:
          "Comment not found or does'nt exist or you may have tried to delete someone else's comment :-(",
      });
    }
  }
}
