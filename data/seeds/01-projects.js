exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // return knex("projects")
  //   .del()
  //   .then(function() {
  // Inserts seed entries
  return knex("projects").insert([
    {
      id: 1,
      project_name: "clean house",
      description: "The house needs to be clean everyday",
      completed: 0
    },
    {
      id: 2,
      project_name: "wash clothes",
      description:
        "Please make sure your separate the colors from white garments.",
      completed: 0
    },
    {
      id: 3,
      project_name: "cook dinner",
      description: "Make sure to cook dinner six days a week",
      completed: 0
    }
  ]);
};
