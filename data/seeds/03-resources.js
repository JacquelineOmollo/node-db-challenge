exports.seed = function(knex, Promise) {
  return knex("resources").insert([
    {
      id: 1,
      resource_name: "recipe-book",
      resource_description: "This is a description"
    },
    {
      id: 2,
      resource_name: "Mop and bucket",
      resource_description: "This is a description"
    },
    {
      id: 3,
      resource_name: "broom",
      resource_description: "This is a description"
    }
  ]);
};
