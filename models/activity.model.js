const sql = require("../db/db");

// constructor
const Activity = function(activity) {
  this.title = activity.title;
  this.created_at = activity.created_at;
  this.updated_at = activity.updated_at;
};

Activity.create = (newActivity, result) => {
  sql.query("INSERT INTO activity SET ?", newActivity, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...newActivity });
  });
};


Activity.findTodoById = (id, result) => {
  sql.query(`SELECT * FROM todo WHERE activity_group_id = ${id}`, (err, res) => {
    result(null, res)
  });
};


Activity.findById = async (id, result) => {
  sql.query(`SELECT * FROM todo WHERE activity_group_id = ${id}`, (err, data) => {
    sql.query(`SELECT * FROM activity WHERE id = ${id}`, (err, res) => {
      if (err) {
        result(err, null);
        return;
      }
  
      if (res.length) {
        result(null, {...res[0], todo_items : data});
        return;
      }
  
      // not found Activity with the id
      result({ kind: "not_found" }, null);
    });
  });
};


Activity.findAll = (result) => {
  sql.query("SELECT * FROM activity LIMIT 1000", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(null, res);
  });
};


Activity.updateById = (id, activity, result) => {
    sql.query("UPDATE activity SET ? WHERE id = ?", [activity, id],(err, res) => {
        if (err) {
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Tutorial with the id
            result({ kind: "not_found" }, null);
            return;
        }

        sql.query(`SELECT * FROM activity WHERE id = ${id}`, (err, res) => {
          result(null, res[0]);
        })
    });
};


Activity.remove = (id, result) => {
    sql.query("DELETE FROM activity WHERE id = ?", id, (err, res) => {
        if (err) {
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Tutorial with the id
            result({ kind: "not_found" }, null);
            return;
        }

        result(null, res);
    });
};


module.exports = Activity;