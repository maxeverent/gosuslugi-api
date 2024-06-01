/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('schedule', function (table) {
        table.increments('id');
        table.boolean('current', 255).notNullable();
        table.string('date_from', 255).notNullable();
        table.string('date_to', 255).notNullable();
        table.string('title', 255).notNullable();
      });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
exports.down = function(knex) {
    return knex.schema.dropTable('schedule');
};

