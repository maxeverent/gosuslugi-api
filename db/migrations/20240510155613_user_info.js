/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
  .createTable('user_info', function (table) {
    table.increments('id');
    table.string('birthDate', 255).notNullable();
    table.string('email', 255).notNullable();
    table.string('firstName', 255).notNullable();
    table.string('gender', 255).notNullable();
    table.integer('inn', 255).notNullable();
    table.string('lastName', 255).notNullable();
    table.string('middleName', 255).notNullable();
    table.string('mobilePhone', 255).notNullable();
    table.string('snils', 255).notNullable();
    table.string('trusted', 255).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('user_info');
};
