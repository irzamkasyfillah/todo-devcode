const sql = require("../db/db");

// constructor
const Activity = function(activity) {
  this.title = activity.title;
  this.email = activity.email;
  // this.created_at = activity.created_at;
  // this.updated_at = activity.updated_at;
  // this.deleted_at = activity.deleted_at;
};

Activity.create = (newActivity, result) => {
  sql.query("INSERT INTO activities SET ?", newActivity, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...newActivity });
  });
};


Activity.findById = async (id, result) => {
  sql.query(`SELECT * FROM todos WHERE activity_group_id = ${id}`, (err, data) => {
    sql.query(`SELECT * FROM activities WHERE id = ${id}`, (err, res) => {
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
  sql.query("SELECT * FROM activities LIMIT 1000", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(null, res);
  });
};


Activity.updateById = (id, activity, result) => {
  sql.query("UPDATE activities SET ? WHERE id = ?", [activity, id], (err, res) => {
        if (err) {
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Tutorial with the id
            result({ kind: "not_found" }, null);
            return;
        }

        sql.query(`SELECT * FROM activities WHERE id = ${id}`, (err, res) => {
            result(null, res[0]);
        })
      });
};


Activity.remove = (id, result) => {
    sql.query("DELETE FROM activities WHERE id = ?", id, (err, res) => {
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