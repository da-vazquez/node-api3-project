const user = require("../users/users-model")


function logger(format) {
  // DO YOUR MAGIC
  return (req, res, next) => {
    const time = new Date().toISOString()

    switch (format) {
      case "short":
    console.log(`${req.ip} made a ${req.method}`)
        break
      case "long":
    console.log(`${req.ip} made a ${req.method} request to ${req.url} at ${time}`)
        break
      default:
        return next(`Error: ${process.env.LOGGER_ERROR}`)
    }
  next()
}
}

function validateUserId() {
  // DO YOUR MAGIC
  return (req, res, next) => {
    user.getById(req.params.id)
      .then((user) => {
        if (user) {
          req.user = user
          next()
      } else {
        res.status(404).json({message: process.env.USER_ID_ERROR})
      }
    })
    .catch((error) => {
      next(error)
    })
  }
}

function validateUser() {
  // DO YOUR MAGIC
  return (req, res, next) => {
    if (!req.body.name) {
      return res.status(400).json({message: process.env.VALIDATE_USER_ERROR})
    }
      next()
  }
}

function validatePost() {
  // DO YOUR MAGIC
  return (req, res, next) => {
    if (!req.body.text) {
      return res.status(400).json({message: process.env.VALIDATE_POST_ERROR})
    }
      next()
  }
}

// do not forget to expose these functions to other modules


module.exports = {
  logger, validateUserId, validateUser, validatePost
}