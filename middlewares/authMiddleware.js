const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  if(req.method === "OPTIONS") {
    next()
  }

  try {
    const token = req.headers?.authorization?.split(' ')[1]
    const deviceId = req.headers['x-device-id']
    if (!token) {
        return res.status(403).json({message: "Не авторизован"})
    }
    const decodedData = jwt.verify(token, deviceId)
    if (deviceId === decodedData.payload) {
      req.user = decodedData
      next()
    } else {
      return res.status(403).json({message: "Не авторизован"})
    }
  } catch(e) {
    console.log(e)
    return res.status(403).json({message: "Не авторизован"})
  }
}