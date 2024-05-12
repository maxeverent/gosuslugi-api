/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('active_days', function (table) {
      table.increments('id');
      table.integer('city_id').unsigned();
      table.foreign('city_id').references('id').inTable('city');
      table.integer('municipality_id').unsigned();
      table.foreign('municipality_id').references('id').inTable('municipality');
      table.string('info', 255).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('active_days');
};
