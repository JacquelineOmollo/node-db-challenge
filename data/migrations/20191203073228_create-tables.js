exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments();
    tbl.text("project_name", 150).notNullable();
    tbl.text("description", 250);
    tbl
      .boolean("completed")
      .notNullable()
      .defaultTo(false);
  });
}
  .createTable("tasks", tbl => {
    tbl.increments();
    tbl.text("task_description", 250).notNullable();
    tbl.text("task_notes", 350);
    tbl.boolean("completed").defaultTo(false);
    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  })

  .createTable("resources", tbl => {
    tbl.increments();
    tbl
      .text("resource_name", 150)
      .unsigned()
      .notNullable();
    tbl.text("resource_description", 250).notNullable();
  })

  .createTable("projects_resources", tbl => {
    tbl.increments();
    tbl
      .integer("resource_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("resources")
      .onUpdate("CASCADE")
      .onDelete("RESTRICT");

    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE")
      .onDelete("RESTRICT");
  });

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("projects")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects_resources");
};
