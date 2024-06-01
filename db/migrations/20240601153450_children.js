/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('children', function (table) {
        table.increments('id');
        table.string('fio', 255).notNullable();
        table.integer('schedule_id').unsigned();
        table.foreign('schedule_id').references('id').inTable('schedule');
        table.integer('school_id').unsigned();
        table.foreign('school_id').references('id').inTable('school');
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('id').inTable('user_info');
      });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('children');
  };