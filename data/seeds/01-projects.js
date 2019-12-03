exports.seed = function(knex) {
  return knex("projects").insert([
    {
      project_name: "clean house",
      description: "The house needs to be clean everyday",
      completed: 0
    },
    {
      project_name: "wash clothes",
      description:
        "Please make sure your separate the colors from white garments.",
      completed: 0
    },
    {
      project_name: "cook dinner",
      description: "Make sure to cook dinner six days a week",
      completed: 0
    }
  ]);
};
