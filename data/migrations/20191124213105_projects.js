exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments();
    tbl.text("project_name", 150).notNullable();
    tbl.text("project_description", 250);
    tbl
      .boolean("completed")
      .notNullable()
      .defaultTo(0);

    tbl.primary(["projects_id", "resources_id"]);
  });
  //   tbl
  //     .integer("projects_id")
  //     .unsigned()
  //     .notNullable()
  //     .references("id")
  //     .inTable("projects")
  //     .onDelete("RE")
  //     .onUpdate("CASCADE");
  // });
};
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects");
};
