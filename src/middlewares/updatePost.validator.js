import { body, validationResult } from "express-validator";

const updatePostValidator = async (req, res, next) => {
  const rules = [
    body("caption").notEmpty().withMessage("Caption is empty!"),
    body("resumeUrl").custom((value, { req }) => {
      if (!req.file) throw new Error("Image file is required!");
      return true;
    }),
  ];

  await Promise.all(rules.map((rule) => rule.run(req)));

  var validationErrors = validationResult(req);

  if (!validationErrors.isEmpty())
    return res.status(400).send(validationErrors.array()[0].msg);
  next();
};

export default updatePostValidator;
