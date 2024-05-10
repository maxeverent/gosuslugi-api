const db = require('../db/dbConfig');

class HomeMenuController {
  async getHomeMenuData(req, res) {
    try {
      const result = await db.select('*').from('home_menu');
      return res.status(200).json(result);
  } catch(e) {
      console.log(e)
      return res.status(400).json("err");
  };
  }
}

module.exports = new HomeMenuController();