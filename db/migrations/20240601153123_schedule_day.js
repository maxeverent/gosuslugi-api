/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('schedule_day', function (table) {
        table.increments('id');
        table.integer('schedule_id').unsigned();
        table.foreign('schedule_id').references('id').inTable('schedule');
        table.string('name', 255).notNullable();
      });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('schedule_day');
  };
