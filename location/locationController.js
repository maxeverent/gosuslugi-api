const db = require('../db/dbConfig');

class LocationController {
  async getCities(req, res) {
    try {
      const result = await db.select('*').from('city');
      return res.status(200).json(result);
    } catch(e) {
        console.log(e)
        return res.status(400).json("err");
    };
  }

  async getMunicipality(req, res) {
    try {
      const result = await db.select('*').from('municipality');
      return res.status(200).json(result);
    } catch(e) {
        console.log(e)
        return res.status(400).json("err");
    };
  }
}

module.exports = new LocationController();