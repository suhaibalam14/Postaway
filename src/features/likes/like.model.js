import { ApplicationError } from "../../errorHandler/applicationError.js";
import { posts } from "../post/post.model.js";
export default class LikeModel {
    constructor(id, userID, postID) {
        this.id = id;
        this.userID = parseInt(userID);
        this.postID = parseInt(postID);
    }
    static getLikes(postID) {
        try {
            const post = posts.find(p => p.id == postID)
            if (!post)
                return "The post you are looking for is not fount or it may doesn't exist";
            const postLikes = likes.filter(l => l.postID == postID)
            if (postLikes.length > 0)
                return ({
                    Message: "Post found successfully:-)",
                    NumberOfLikes: postLikes.length,
                    Likes: postLikes
                });
            else
                return 'Post exists but no one liked it';

        } catch (error) {
            console.log(error);
            throw new ApplicationError('Something went wrong', 500);
        }
    }

    static toggleLike(postID, userID) {
        try {
            const post = posts.find(p => p.id == postID)
            if (!post)
                return "The post you are looking for is not fount or it may doesn't exist";
            const likeIndex = likes.findIndex(l => l.postID == postID && l.userID == userID)
            if (likeIndex == -1) {
                const like = new LikeModel(likes.length, userID, postID);
                likes.push(like)
                return ({
                    Message: "Post liked successfully :-)",
                    Like: like
                });
            } else {
                const unlike = likes.splice(likeIndex, 1);
                return ({
                    Message: "Post unliked successfully :-)",
                    Like: unlike[0]
                });
            }
        } catch (error) {
            console.log(error)
            throw new ApplicationError('Something went wrong', 500);
        }
    }


}

var likes = [
    { id: 0, userID: 2, postID: 3 },
    { id: 1, userID: 2, postID: 0 },
    { id: 2, userID: 4, postID: 2 },
    { id: 3, userID: 0, postID: 0 },
    { id: 4, userID: 3, postID: 4 },
    { id: 5, userID: 4, postID: 4 },
    { id: 6, userID: 1, postID: 0 },
    { id: 7, userID: 1, postID: 4 },
    { id: 8, userID: 3, postID: 0 },
    { id: 9, userID: 4, postID: 1 },
    { id: 10, userID: 2, postID: 0 },
    { id: 11, userID: 4, postID: 0 },
    { id: 12, userID: 0, postID: 0 },
    { id: 13, userID: 0, postID: 3 },
    { id: 14, userID: 3, postID: 0 },
    { id: 15, userID: 1, postID: 2 },
    { id: 16, userID: 3, postID: 2 },
    { id: 17, userID: 4, postID: 3 },
    { id: 18, userID: 3, postID: 3 },
    { id: 19, userID: 2, postID: 1 }
]
