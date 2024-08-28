import UserModel from "./user.model.js";
import jwt from 'jsonwebtoken';

export default class UserController {
  signup(req, res) {
    const { name, email, password } = req.body;
    console.log(req.body);
    const newUser = UserModel.addUser(name, email, password);
    console.log(newUser)
    res.status(200).send('Registration successfull: ' + JSON.stringify(newUser));
  }
  signin(req, res) {
    const { email, password } = req.body;
    const user = UserModel.isUserRegistered(email, password);
    if (!user) res.status(400).send("Invalid credentials");
    else {
      //create token
      const token = jwt.sign(
        {
          userID: user.id,
          email: user.email,
        },
        "C3E43F87CD2438BF",
        {
          expiresIn: "1h",
        }
      );
      return res
        .status(200)
        .send("Login successfull " + "Generated token: " + token);
    }
  }
}
