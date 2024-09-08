import { posts } from "../post/post.model.js";
export default class CommentModel {
  constructor(id, userID, postID, content) {
    this.id = id;
    this.userID = userID;
    this.postID = parseInt(postID);
    this.content = content;
  }
  static addComment(userID, postID, content) {
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
  }

  static getcommentsbyID(postID) {
    const post = posts.find((p) => p.id == postID);
    if (!post) return null;
    const postComments = comments.filter((p) => p.postID == postID);
    return postComments;
  }

  static updateComment(commentID, userID, content) {
    const commentIndex = comments.findIndex(
      (i) => i.id == commentID && i.userID == userID
    );
    if (commentIndex > -1) {
      comments[commentIndex].content = content;
      return comments[commentIndex];
    } else {
      return null;
    }
  }

  static deleteComment(commentID, userID) {
    const commentIndex = comments.findIndex(
      (i) => i.id == commentID && i.userID == userID
    );

    if (commentIndex > -1) {
      const commentObj = comments.splice(commentIndex, 1);
      return commentObj;
    } else {
      return null;
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
