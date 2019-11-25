exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          id: 1,
          task_description: "This is the first task",
          notes: "The notes part of the notes:",
          completed: 0,
          project_id: 1
        },
        {
          id: 2,
          task_description: "This is the second task",
          notes: "The notes part of the notes:",
          completed: 0,
          project_id: 2
        },
        {
          id: 3,
          task_description: "This is the third tasks",
          notes: "The notes part of the notes:",
          completed: 0,
          project_id: 3
        }
      ]);
    });
};
