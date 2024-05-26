/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('mfc_steps', function (table) {
        table.increments('id');
        table.integer('mfc_id').unsigned();
        table.foreign('mfc_id').references('id').inTable('mfc');
        table.string('date', 255).notNullable();
        table.string('name', 255).notNullable();
      });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
exports.down = function(knex) {
    return knex.schema.dropTable('mfc_steps');
};