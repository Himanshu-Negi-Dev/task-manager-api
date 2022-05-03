class CustomApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createError = (msg, statusCode) => {
  return new CustomApiError(msg, statusCode);
}

module.exports = { CustomApiError, createError }