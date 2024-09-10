import { ApplicationError } from "../../errorHandler/applicationError.js";

export default class PostModel {
  constructor(id, userID, caption, imageUrl) {
    this.id = id;
    this.userID = userID;
    this.caption = caption;
    this.imageUrl = imageUrl;
  }

  static createPost(userID, imageUrl, caption) {
    try {
      const newPost = new PostModel(
        posts.length + 1,
        userID,
        caption,
        imageUrl
      );
      posts.push(newPost);
      return newPost;
    } catch (error) {
      console.log(error)
      throw new ApplicationError("Something went wrong", 500);
    }
  }

  static getAllPost() {
    try {
      return posts;
    } catch (error) {
      console.log(error)
      throw new ApplicationError('Something went wrong', 500);
    }
  }

  static getPostById(postID) {
    try {
      const post = posts.find((p) => p.id == postID);
      return post;

    } catch (error) {
      console.log(error)
      throw new ApplicationError("Something went wrong", 500);
    }
  }

  static getPostByUserCred(userID) {
    try {
      const userPost = posts.filter((p) => p.userID == userID);
      return userPost;

    } catch (error) {
      console.log(error);
      throw new ApplicationError('Something went wrong', 500);
    }
  }

  static deletePostById(postID, userID) {
    try {
      const postIndex = posts.findIndex((i) => {
        return i.id == postID && i.userID == userID;
      });
      if (postIndex > -1) {
        const post = posts.splice(postIndex, 1);
        return post;
      } else return null;
    } catch (error) {
      console.log(error);
      throw new ApplicationError('Something went wrong', 500);
    }
  }

  static updatePostById(postID, userID, imageUrl, caption) {
    try {
      const postIndex = posts.findIndex((i) => {
        return i.id == postID && i.userID == userID;
      });
      if (postIndex > -1) {
        const post = new PostModel(postID, userID, caption, imageUrl);
        posts[postIndex] = post;
        return post;
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      throw new ApplicationError('Something went wrong', 500);
    }
  }
}

export var posts = [
  {
    id: 0,
    userID: 1,
    caption: "Dummy Caption 0",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 1,
    userID: 3,
    caption: "Dummy Caption 1",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    userID: 1,
    caption: "Dummy Caption 2",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    userID: 1,
    caption: "Dummy Caption 3",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    userID: 2,
    caption: "Dummy Caption 4",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    userID: 2,
    caption: "Dummy Caption 5",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    userID: 3,
    caption: "Dummy Caption 6",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    userID: 3,
    caption: "Dummy Caption 7",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    userID: 2,
    caption: "Dummy Caption 8",
    imageUrl: "https://via.placeholder.com/150",
  },
];
