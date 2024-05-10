const db = require('../db/dbConfig');

class UserController {
  async getUserData(req, res) {
    try {
      const result = await db.select('*').from('user_info');
      return res.status(200).json(result);
  } catch(e) {
      console.log(e)
      return res.status(400).json("err");
  };
  }
}

module.exports = new UserController();