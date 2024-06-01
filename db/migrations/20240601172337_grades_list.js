/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('grades_list', function (table) {
        table.increments('id');
        table.string('subject', 255).notNullable();
        table.string('svg_score', 255).notNullable();
        table.integer('child_id').unsigned();
        table.foreign('child_id').references('id').inTable('children');
      });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('grades_list');
  };