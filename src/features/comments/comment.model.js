import { ApplicationError } from "../../errorHandler/applicationError.js";
import { posts } from "../post/post.model.js";
export default class CommentModel {
  constructor(id, userID, postID, content) {
    this.id = id;
    this.userID = userID;
    this.postID = parseInt(postID);
    this.content = content;
  }
  static addComment(userID, postID, content) {
    try {
      const post = posts.find((p) => p.id == postID);
      if (!post) return null;
      const newCommentObj = new CommentModel(
        comments.length,
        userID,
        postID,
        content
      );
      comments.push(newCommentObj);
      return newCommentObj;
    } catch (error) {
      console.log(error);
      throw new ApplicationError('Something went wrong', 500);
    }
  }

  static getcommentsbyID(postID) {
    try {
      const post = posts.find((p) => p.id == postID);
      if (!post) return null;
      const postComments = comments.filter((p) => p.postID == postID);
      return postComments;
    } catch (error) {
      console.log(error);
      throw new ApplicationError('Something went wrong', 500);
    }
  }

  static updateComment(commentID, userID, content) {
    try {
      const commentIndex = comments.findIndex(
        (i) => i.id == commentID && i.userID == userID
      );
      if (commentIndex > -1) {
        comments[commentIndex].content = content;
        return comments[commentIndex];
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      throw new ApplicationError("Something went wrong", 500);
    }
  }

  static deleteComment(commentID, userID) {
    try {
      const commentIndex = comments.findIndex(
        (i) => i.id == commentID && i.userID == userID
      );

      if (commentIndex > -1) {
        const commentObj = comments.splice(commentIndex, 1);
        return commentObj;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      throw new ApplicationError('Something went wrong', 500);
    }
  }
}

var comments = [
  { id: 0, userID: 1, postID: 0, content: "This is a dummy comment." },
  { id: 1, userID: 2, postID: 1, content: "Another dummy comment." },
  { id: 2, userID: 1, postID: 2, content: "Yet another dummy comment." },
  { id: 3, userID: 1, postID: 3, content: "A fourth dummy comment." },
  { id: 4, userID: 2, postID: 1, content: "A fifth dummy comment." },
  { id: 5, userID: 2, postID: 2, content: "A sixth dummy comment." },
  { id: 6, userID: 1, postID: 3, content: "A seventh dummy comment." },
  { id: 7, userID: 2, postID: 3, content: "An eighth dummy comment." },
  { id: 8, userID: 3, postID: 2, content: "A ninth dummy comment." },
  { id: 9, userID: 1, postID: 1, content: "A tenth dummy comment." },
];
