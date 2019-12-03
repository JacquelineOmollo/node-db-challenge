exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
      project_name: "clean house",
      description: "The house needs to be clean everyday",
      completed: false
    },
    {
      project_name: "wash clothes",
      description:
        "Please make sure your separate the colors from white garments.",
      completed: false
    },
    {
      project_name: "cook dinner",
      description: "Make sure to cook dinner six days a week",
      completed: false
    }
  ]);
};
