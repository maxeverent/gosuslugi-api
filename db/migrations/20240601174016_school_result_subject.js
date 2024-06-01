/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('school_result_object', function (table) {
        table.increments('id');
        table.string('avg_score', 255).notNullable();
        table.string('object', 255).notNullable();
        table.integer('school_period_id').unsigned();
        table.foreign('school_period_id').references('id').inTable('school_period');
        table.integer('child_id').unsigned();
        table.foreign('child_id').references('id').inTable('children');
      });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('school_result_object');
  };