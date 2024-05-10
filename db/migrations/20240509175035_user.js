/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('user', function (table) {
      table.increments('id');
      table.string('device_id', 255).notNullable();
      table.string('access_token', 255).notNullable();
      table.string('pin_code', 255).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
