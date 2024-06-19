const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  if(req.method === "OPTIONS") {
    next()
  }

  try {
    const checkAuth = req.headers.authorization

    const deviceId = req.headers['x-device-id']
    if (!checkAuth || !deviceId) {
      return res.status(401).json({message: "Не авторизован"})
    }

    const token = checkAuth.split(' ')[1]

    const decodedData = jwt.verify(token, deviceId)
    if (deviceId === decodedData.payload) {
      req.user = decodedData
      next()
    } else {
      return res.status(401).json({message: "Не авторизован"})
    }
  } catch(e) {
    console.log(e)
    return res.status(401).json({message: "Не авторизован"})
  }
}