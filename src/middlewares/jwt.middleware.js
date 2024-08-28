import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  // read the token
  const token = req.headers["authorization"];
  // console.log(token)

  //if no token return error

  if (!token) return res.status(401).send("Unauthorized token");
  //check if the token is valid
  try {
    const payload = jwt.verify(token, "C3E43F87CD2438BF");
    req.userID = payload.userID;
    // console.log(payload)
  } catch (err) {
    //return error in case of any issue
    return res.status(401).send("Unauthorized - some issue occured");
  }

  // call next
  next();
};

export default jwtAuth;
