exports.up = function(knex) {
  return knex.schema.createTable("tasks", tbl => {
    tbl.increments();
    tbl.text("task_description", 250).notNullable();
    tbl.text("task_notes", 350);
    tbl
      .boolean("completed")
      .notNullable()
      .defaultTo(0);
    tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tasks");
};
