const db = require('../db/dbConfig');

class NotificationController {
  async getNotifications(req, res) {
    try {
      const result = await db.select('*').from('notification');
      return res.status(200).json(result);
  } catch(e) {
      console.log(e)
      return res.status(400).json("err");
  };
  }
}

module.exports = new NotificationController();