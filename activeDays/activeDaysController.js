const db = require('../db/dbConfig');

class ActiveDaysController {
  async getActiveDayInfo(req, res) {
    try {
      const cityId = req.query.city
      const municipalityId = req.query.municipality

      if (!cityId || !municipalityId) {
        return res.status(400).json({message: 'параметры null'});
      }

      const result = await db.select('*').from('active_days').where('city_id', cityId).where('municipality_id', municipalityId);
      return res.status(200).json(result);
    } catch(e) {
        console.log(e)
        return res.status(400).json("err");
    };
  }
}

module.exports = new ActiveDaysController();