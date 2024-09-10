import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: "log.txt" })],
});
const loggerMiddleware = async (req, res, next) => {
  //log request body
  if (!req.url.includes("signin")) {
    const logData = `${new Date().toString()} + ${req.url} - ${JSON.stringify(
      req.body
    )}`;
    logger.info(logData)
  }

  next();
};

export default loggerMiddleware;
