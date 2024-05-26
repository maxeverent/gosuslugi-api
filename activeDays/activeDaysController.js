const db = require('../db/dbConfig');

class ActiveDaysController {
  async getActiveDayInfo(req, res) {
    try {
      const cityId = req.query.city
      const municipalityId = req.query.municipality

      if (!cityId || !municipalityId) {
        return res.status(400).json({message: 'параметры null'});
      }

      const result = await db.raw('select active_days.id, active_days.info, city.name as city_name, municipality.name as municipality_name from active_days inner join city on active_days.city_id = city.id and city.id = ? inner join municipality on active_days.municipality_id = municipality.id and municipality.id = ?', [cityId, municipalityId]);                   


      return res.status(200).json(result);
    } catch(e) {
        console.log(e)
        return res.status(400).json("err");
    };
  }
}

module.exports = new ActiveDaysController();