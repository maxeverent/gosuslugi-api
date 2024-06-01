/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('ugra_status', function (table) {
        table.increments('id');
        table.string('fname', 255).notNullable();
        table.string('mname', 255).notNullable();
        table.string('lname', 255).notNullable();
        table.string('birthday', 255).notNullable();
        table.string('status', 255).notNullable();
        table.string('info', 255).notNullable();
        table.integer('request_id').unsigned();
        table.foreign('request_id').references('id').inTable('ugra_request');
      });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('ugra_status');
  };