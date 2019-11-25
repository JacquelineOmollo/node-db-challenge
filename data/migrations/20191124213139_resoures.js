exports.up = function(knex) {
  return knex.schema
    .createTable("resources", tbl => {
      tbl.increments();
      tbl
        .integer("resource_name", 150)
        .unsigned()
        .notNullable();
      tbl.text("resource_description", 250).notNullable();
    })
    .createTable("project_resource", tbl => {
      tbl.increments();
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onUpdate("RESTRICT")
        .onDelete("CASCADE");

      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("RESTRICT")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("resources")
    .dropTableIfExists("project_resource");
};