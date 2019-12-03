exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("tasks").insert([
    {
      task_description: "This is the first task",
      task_notes: "The notes part of the notes:",
      completed: 0,
      project_id: 1
    },
    {
      task_description: "This is the second task",
      task_notes: "The notes part of the notes:",
      completed: 0,
      project_id: 2
    },
    {
      task_description: "This is the third tasks",
      task_notes: "The notes part of the notes:",
      completed: 0,
      project_id: 3
    }
  ]);
};
