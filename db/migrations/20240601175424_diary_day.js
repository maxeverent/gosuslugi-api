/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('diary_day', function (table) {
        table.increments('id');
        table.string('name', 255).notNullable();
        table.integer('diary_id').unsigned();
        table.foreign('diary_id').references('id').inTable('diary');
      });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('diary_day');
  };
