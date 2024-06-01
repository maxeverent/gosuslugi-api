const db = require('../db/dbConfig');

class DiaryController {
  async getChildren(req, res) {
    try {
      const schoolId = req.query.schoolId

      if (!schoolId) {
        return res.status(400).json("параметры null");
      }

      const userId = await db.select('id').from('user_info')
      const result = await db.select('*').from('children').where('user_id', '=', userId[0].id).where('school_id', '=', schoolId);

      return res.status(200).json(result);
    } catch(e) {
        console.log(e)
        return res.status(400).json("err");
    };
  }

  async getSchool(req, res) {
    try {
      const result = await db.select('*').from('school')

      return res.status(200).json(result);
    } catch(e) {
        console.log(e)
        return res.status(400).json("err");
    };
  }

  async getPeriod(req, res) {
    try {
      const result = await db.select('*').from('school_period')

      return res.status(200).json(result);
    } catch(e) {
        console.log(e)
        return res.status(400).json("err");
    };
  }

  async getSchedule(req, res) {
    try {
      const childId = req.query.childId

      if (!childId) {
        return res.status(400).json({message: 'параметры null'});
      }
      
      const schedule = await db.select('*').from('schedule').where('child_id', '=', childId)

      for (let index = 0; index < schedule.length; index++) {
        await db.select('*').from('schedule_day').where('schedule_id', '=', schedule[index].id).then((res) => {
          schedule[index].days = res
        })

        for (let i = 0; i < schedule[index].days.length; i++) {
          const subjects = await db.select('*').from('schedule_subject').where('schedule_day_id', '=', schedule[index].days[i].id)
          schedule[index].days[i].subjects = subjects
        }
      } 
      
      return res.status(200).json(schedule);
    } catch(e) {
        console.log(e)
        return res.status(400).json("err");
    };
  }

  async getGradesList(req, res) {
    try {
      const childId = req.query.childId

      if (!childId) {
        return res.status(400).json({message: 'параметры null'});
      }
      
      const gradesList = await db.select('*').from('grades_list').where('child_id', '=', childId)

      for (let index = 0; index < gradesList.length; index++) {
        await db.select('*').from('grades_list_mark').where('grades_list_id', '=', gradesList[index].id).then((res) => {
          gradesList[index].marks = res
        })
      }
      
      return res.status(200).json(gradesList);
    } catch(e) {
      console.log(e)
      return res.status(400).json("err");
    };
  }

  async getDiary(req, res) {
    try {
      const childId = req.query.childId

      if (!childId) {
        return res.status(400).json({message: 'параметры null'});
      }
      
      const diary = await db.select('*').from('diary').where('child_id', '=', childId)

      for (let index = 0; index < diary.length; index++) {
        await db.select('*').from('diary_day').where('diary_id', '=', diary[index].id).then((res) => {
          diary[index].days = res
        })

        for (let i = 0; i < diary[index].days.length; i++) {
          const subjects = await db.select('*').from('diary_subject').where('diary_day_id', '=', diary[index].days[i].id)
          diary[index].days[i].subjects = subjects
        }
      } 
      
      return res.status(200).json(diary);
    } catch(e) {
        console.log(e)
        return res.status(400).json("err");
    };
  }

  async getResultByPeriod(req, res) {
    try {
      const childId = req.query.childId
      const periodId = req.query.periodId

      if (!childId || !periodId) {
        return res.status(400).json({message: 'параметры null'});
      }
      
      const results = await db.select('*').from('school_result_object').where('child_id', '=', childId).where('school_period_id', '=', periodId)
      
      return res.status(200).json(results);
    } catch(e) {
      console.log(e)
      return res.status(400).json("err");
    };
  }
}

module.exports = new DiaryController();