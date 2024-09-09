import express from 'express';
import LikeController from './like.controller.js';

const likeRouter = express.Router();
const likeController = new LikeController();

likeRouter.get('/:postID', likeController.getLikes)
likeRouter.get('/toggle/:postID', likeController.toggleLike)

export default likeRouter;