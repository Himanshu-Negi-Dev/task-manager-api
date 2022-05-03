const { CustomApiError } = require('../errors/CustomApiError');

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    return res.status(err.statusCode).json({ success: false, msg: err.message })
  }
  return res.status(500).json({ success: false, msg: "Something went wrong please try again later!" })
}

module.exports = errorHandlerMiddleware;