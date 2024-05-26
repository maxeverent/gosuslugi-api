const jwt = require('jsonwebtoken')
const db = require('../db/dbConfig');

function generateTokens(payload) {
  const accessToken = jwt.sign({payload: payload}, payload, {expiresIn: '24h'})
  return accessToken
}

class AuthController {
  async login(req, res) {
    try {
      const deviceId = req.headers['x-device-id']

      const token = generateTokens(deviceId)

      const currentUser = await db('user').where('device_id', '=', deviceId);

      console.log(currentUser)

      if (currentUser) {
        await db('user').where('device_id', '=', deviceId).update('access_token', token);
      } else {
        await db("user").insert({
          device_id: deviceId,
          access_token: token,
          pin_code: ''
        });
      }
      return res.status(200).json({token: token});
    } catch(e) {
      console.log(e)
      return res.status(400).json('error');
    }
  }

  async createPinCode(req, res) {
    try {
      const deviceId = req.headers['x-device-id']
      if (!deviceId) {
        return res.status(400).json({message: 'X-DEVICE-ID null'});
      }
      const pincode = req.body.pincode

      if (!pincode) {
        return res.status(400).json({message: 'pincode null'});
      }

      await db('user').where('device_id', '=', deviceId).update('pin_code', pincode);

      return res.status(200).json({pincode: pincode});
    } catch(e) {
      return res.status(400).json('error');
    }
  }

  async refresh(req, res) {
    try {
      const deviceId = req.headers['x-device-id']
      const token = generateTokens(deviceId)
      await db('user').where('device_id', '=', deviceId).update('access_token', token);
      return res.status(200).json({token: token});
    } catch(e) {
      return res.status(400).json('error');
    }
  }

  async logout(req, res) {
    try {
      const deviceId = req.headers['x-device-id']
      await db("user").where("device_id", deviceId).del();
      return res.status(200).json({message: 'Успех'});
    } catch(e) {
      return res.status(400).json('error');
    }
  }

}

module.exports = new AuthController();