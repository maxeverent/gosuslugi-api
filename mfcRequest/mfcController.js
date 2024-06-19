const db = require('../db/dbConfig');

class ActiveDaysController {
  async getMfcRequest(req, res) {
    try {
      
      const { id } = req.params

			const mfc = await db('mfc').where('number', id);

      if (mfc.length === 0) return res.status(400).json({message: 'не найдено'});

			const mfcSteps = await db('mfc_steps').select('*').where('mfc_id', mfc[0].id);
			mfc[0].mfc_steps = mfcSteps
			const result = mfc

      return res.status(200).json(result);
    } catch(e) {
        console.log(e)
        return res.status(400).json("err");
    };
  }
}

module.exports = new ActiveDaysController();