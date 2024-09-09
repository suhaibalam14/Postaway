import LikeModel from "./like.model.js";

export default class LikeController {
    getLikes(req, res, next) {
        const postID = req.params.postID;
        const likes = LikeModel.getLikes(postID);

        res.status(200).json({
            likes: likes
        })

    }

    toggleLike(req, res, next) {
        const postID = req.params.postID;
        const userID = req.userID;
        const isToggled = LikeModel.toggleLike(postID,userID);
        res.status(400).send(isToggled)
    }

}