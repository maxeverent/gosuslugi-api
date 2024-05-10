/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('home_menu', function (table) {
      table.increments('id');
      table.string('description', 255).notNullable();
      table.string('icon', 255).notNullable();
      table.string('title', 255).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('home_menu');
};
