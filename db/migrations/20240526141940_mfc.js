/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('mfc', function (table) {
        table.increments('id');
        table.string('number', 255).notNullable();
        table.string('sevice', 255).notNullable();
        table.string('responsible', 255).notNullable();
        table.string('status', 255).notNullable();
        table.string('result', 255).notNullable();
      });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('mfc');
  };