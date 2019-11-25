const data = require("../data/db-config");

function find() {
  return data("projects");
}

function findById(id) {
  return data("projects")
    .where({ id })
    .first();
}

function getTasks(id) {
  return data("projects as p")
    .select(
      "p.id",
      "p.project_name",
      "t.task_description",
      "t.task_notes",
      "p.project_description",
      "t.completed"
    )
    .join("p.id", "tasks.project_id, tasks as t")
    .where({ id });
}

function add(id, task) {
  return data("tasks")
    .insert(task)
    .where({ project_id: id });
}

module.exports = {
  find,
  findById,
  getTasks,
  add
};
