exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments();
    tbl.text("project_name", 150).notNullable();
    tbl.text("description", 250);
    tbl
      .boolean("completed")
      .notNullable()
      .defaultTo(0);
  });
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects");
};
