/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('carousel', function (table) {
      table.increments('id');
      table.string('description', 255).notNullable();
      table.string('image', 255).notNullable();
      table.string('link', 255).notNullable();
      table.string('name', 255).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('carousel');
};
