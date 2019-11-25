exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // return knex("resources")
  //   .del()
  //   .then(function() {
  // Inserts seed entries
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
