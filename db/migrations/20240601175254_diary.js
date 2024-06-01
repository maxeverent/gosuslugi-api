/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('diary', function (table) {
        table.increments('id');
        table.string('current', 255).notNullable();
        table.string('date_from', 255).notNullable();
        table.string('date_to', 255).notNullable();
        table.string('title', 255).notNullable();
        table.integer('child_id').unsigned();
        table.foreign('child_id').references('id').inTable('children');
      });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('diary');
  };
