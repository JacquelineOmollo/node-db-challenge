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
  return data("projects as p ")
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
  return data("projects")
    .insert(project)
    .where({ project_id: id });
}
function addResources(id, resources) {
  return data("resources")
    .insert(resources)
    .where({ project_id: id });
}

// function remove(id) {
//   return data("projects")
//     .where({ id })
//     .delete();
// }

module.exports = {
  find,
  findById,
  getTasks,
  addProject,
  addResources
};
