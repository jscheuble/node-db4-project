exports.up = function (knex) {
  return knex.schema
    .createTable("recipe", (tbl) => {
      tbl.increments();
      tbl.text("recipe_name", 150).unique().notNullable();
    })
    .createTable("ingredient", (tbl) => {
      tbl.increments();
      tbl.text("ingredient_name", 150).notNullable();
      tbl.text("quantity", 150).notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("step", (tbl) => {
      tbl.increments();
      tbl.integer("step_number").unsigned().notNullable();
      tbl.text("instruction", 200).notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("step")
    .dropTableIfExists("ingredient")
    .dropTableIfExists("recipe");
};
