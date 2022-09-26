const sql = require("../db/db");

// constructor
const Todo = function(Todo) {
  this.title = Todo.title;
  this.activity_group_id = Todo.activity_group_id;
  this.is_active = Todo.is_active;
  this.priority = Todo.priority;
  // this.created_at = Todo.created_at;
  // this.updated_at = Todo.updated_at;
  // this.deleted_at = Todo.deleted_at;
};

Todo.create = (newTodo, result) => {
  sql.query("INSERT INTO todos SET ?", newTodo, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...newTodo });
  });
};

Todo.findById = (id, result) => {
  sql.query(`SELECT * FROM todos WHERE id = ${id}`, (err, res) => {
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

Todo.findAll = (activity_group_id ,result) => {
  let query = "SELECT * FROM todos"

  if (activity_group_id) {
    query += ` WHERE activity_group_id = ${activity_group_id}`
  }

  sql.query(query + " LIMIT 1000", (err, res) => {
    if (err) {
      result(null, err);
      return;
    }
    result(null, res);
  });
};


Todo.updateById = (id, todo, result) => {
    sql.query("UPDATE todos SET ? WHERE id = ?", [todo, id],(err, res) => {
        if (err) {
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found Todo with the id
            result({ kind: "not_found" }, null);
            return;
        }

        sql.query(`SELECT * FROM todos WHERE id = ${id}`, (err, res) => {
          result(null, res[0]);
        })
    });
};

Todo.remove = (id, result) => {
    sql.query("DELETE FROM todos WHERE id = ?", id, (err, res) => {
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