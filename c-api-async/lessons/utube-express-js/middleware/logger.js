const moment = require("moment");

//call "next" last to move to middleware fn in the stack
const logger = (req, res, next) => {
  console.log(
    `Requested: ${req.protocol}://${req.get("host")}${
      req.originalUrl
    }: ${moment()}`
  );
  next();
}; // video stopped at 28:00min

module.exports = logger;