const db = require("./data/db-config");

module.exports = {
  find,
  findById,
  getTasks,
  addProject,
  addResources,
  update,
  remove
};

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function getTasks(id) {
  return db("projects as p ")
    .select(
      "p.project_name",
      "t.task_description",
      "t.task_notes",
      "p.project_description",
      "t.completed"
    )
    .join(" tasks as t", "p.id", "t.project_id")
    .where({ project_id: id });
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .where({ project_id: id });
}
function addResources(id, resources) {
  return db("resources")
    .insert(resources)
    .where({ resource_id: id });
}

function update(id, changes) {
  return db("projects")
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? this.get(id) : null));
}

function remove(id) {
  return db("projects")
    .where("id", id)
    .del();
}
