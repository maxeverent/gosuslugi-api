/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('diary_subject', function (table) {
        table.increments('id');
        table.string('object', 255).notNullable();
        table.string('teacher', 255).notNullable();
        table.string('homework', 255).notNullable();
        table.integer('diary_day_id').unsigned();
        table.foreign('diary_day_id').references('id').inTable('diary_day');
      });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('diary_subject');
  };
