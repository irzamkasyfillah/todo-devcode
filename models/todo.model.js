const sql = require("../db/db");

// constructor
const Todo = function(Todo) {
  this.title = Todo.title;
  this.activity_group_id = Todo.activity_group_id;
  this.is_active = Todo.is_active;
  this.priority = Todo.priority;
};

Todo.create = (newTodo, result) => {
  sql.query("INSERT INTO todo SET ?", newTodo, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...newTodo });
  });
};

Todo.findById = (id, result) => {
  sql.query(`SELECT * FROM todo WHERE id = ${id}`, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    if (res.length) {
      result(null, res[0]);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

Todo.findAll = (result) => {
  sql.query("SELECT * FROM todo LIMIT 1000", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(null, res);
  });
};


Todo.updateById = (id, todo, result) => {
    sql.query("UPDATE todo SET ? WHERE id = ?", [todo, id],(err, res) => {
        if (err) {
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Todo with the id
            result({ kind: "not_found" }, null);
            return;
        }

        sql.query(`SELECT * FROM todo WHERE id = ${id}`, (err, res) => {
          result(null, res[0]);
        })
    });
};

Todo.remove = (id, result) => {
    sql.query("DELETE FROM todo WHERE id = ?", id, (err, res) => {
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


module.exports = Todo;