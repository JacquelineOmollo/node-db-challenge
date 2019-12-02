exports.seed = function(knex, Promise) {
  return knex("resources").insert([
    {
      resource_name: "recipe-book",
      resource_description: "This is a description"
    },
    {
      resource_name: "Mop and bucket",
      resource_description: "This is a description"
    },
    {
      resource_name: "broom",
      resource_description: "This is a description"
    }
  ]);
};
