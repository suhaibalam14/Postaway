import express from "express";
import UserController from "./user.controller.js";
import signupValidator from "../../middlewares/signup.validator.js";
import signinValidator from "../../middlewares/signin.validator.js";

const usersRouter = express.Router();

const userController = new UserController();

usersRouter.post("/signup", signupValidator, userController.signup);
usersRouter.post("/signin", signinValidator, userController.signin);

export default usersRouter;
