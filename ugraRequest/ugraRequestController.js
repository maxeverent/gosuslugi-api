const db = require('../db/dbConfig');

class UgraRequestContoller {
  async getRequests(req, res) {
    try {
      const requests = await db('ugra_request');
      return res.status(200).json(requests);
    } catch(e) {
      console.log(e)
      return res.status(400).json("err");
    };
  }

  async getBanks(req, res) {
    try {
      const requests = await db('bank');
      return res.status(200).json(requests);
    } catch(e) {
      console.log(e)
      return res.status(400).json("err");
    };
  }

  async getRequestById(req, res) {
    try {
      const { id } = req.params;

      const requests = await db('ugra_request').where('id', '=', id);
      return res.status(200).json(requests);
    } catch(e) {
      console.log(e)
      return res.status(400).json("err");
    };
  }

  async getRequestStatus(req, res) {
    try {
      
      const requests = await db('ugra_status');
      return res.status(200).json(requests);
    } catch(e) {
      console.log(e)
      return res.status(400).json("err");
    };
  }

  async addRequest(req, res) {
    try {
      const data = req.body;
      const newId = await db("ugra_request").insert(data);
      await db("ugra_status").insert({
        fname: data.fname,
        mname: data.mname,
        lname: data.lname,
        fname: data.fname,
        birthday: data.birthday,
        status: 'Выполнена',
        info: 'Тест',
        request_id: newId[0],
      });
      return res.status(200).json(data);
    } catch(e) {
      console.log(e)
      return res.status(400).json("err");
    };
  }
}

module.exports = new UgraRequestContoller();