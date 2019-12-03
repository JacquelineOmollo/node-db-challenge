exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
      id: 1,
      project_name: "clean house",
      project_description: "The house needs to be clean everyday",
      completed: false
    },
    {
      id: 2,
      project_name: "wash clothes",
      project_description:
        "Please make sure your separate the colors from white garments.",
      completed: false
    },
    {
      id: 3,
      project_name: "cook dinner",
      project_description: "Make sure to cook dinner six days a week",
      completed: false
    }
  ]);
};
