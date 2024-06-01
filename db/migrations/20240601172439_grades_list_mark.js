/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('grades_list_mark', function (table) {
        table.increments('id');
        table.string('mark', 255).notNullable();
        table.string('date', 255).notNullable();
        table.integer('grades_list_id').unsigned();
        table.foreign('grades_list_id').references('id').inTable('grades_list');
      });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('grades_list_mark');
  };