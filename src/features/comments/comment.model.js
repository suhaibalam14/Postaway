export default class CommentModel{
 constructor(id, userID, postID, content){
    this.id = id;
    this.userID= userID;
    this.postID=postID;
    this.content=content;
 }   

}

var dummyData = [
    { id: 0, userID: 1, postID: 2, content: "This is a dummy comment." },
    { id: 1, userID: 2, postID: 3, content: "Another dummy comment." },
    { id: 2, userID: 3, postID: 4, content: "Yet another dummy comment." },
    { id: 3, userID: 1, postID: 5, content: "A fourth dummy comment." },
    { id: 4, userID: 2, postID: 6, content: "A fifth dummy comment." },
    { id: 5, userID: 3, postID: 7, content: "A sixth dummy comment." },
    { id: 6, userID: 1, postID: 8, content: "A seventh dummy comment." },
    { id: 7, userID: 2, postID: 9, content: "An eighth dummy comment." },
    { id: 8, userID: 3, postID: 10, content: "A ninth dummy comment." },
    { id: 9, userID: 1, postID: 11, content: "A tenth dummy comment." }
  ];