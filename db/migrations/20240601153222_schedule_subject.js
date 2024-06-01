/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('schedule_subject', function (table) {
        table.increments('id');
        table.integer('schedule_day_id').unsigned();
        table.foreign('schedule_day_id').references('id').inTable('schedule_day');
        table.string('subject', 255).notNullable();
      });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('schedule_subject');
  };

