/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('notification', function (table) {
        table.increments('id');
        table.string('title', 255).notNullable();
        table.string('text', 255).notNullable();
        table.string('date', 255).notNullable();
      });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('notification');
  };
