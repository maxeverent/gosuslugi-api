/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('ugra_request', function (table) {
        table.increments('id');
        table.string('fname', 255).notNullable();
        table.string('mname', 255).notNullable();
        table.string('lname', 255).notNullable();
        table.string('birthday', 255).notNullable();
        table.string('gender', 255).notNullable();
        table.string('address_reg', 255).notNullable();
        table.string('phone', 255).notNullable();
        table.string('name_org', 255).notNullable();
        table.integer('city_id').unsigned();
        table.foreign('city_id').references('id').inTable('city');
        table.integer('bank_id').unsigned();
        table.foreign('bank_id').references('id').inTable('bank');
        table.string('check', 255).notNullable();
        table.string('bank_name', 255).notNullable();
        table.string('bik', 255).notNullable();
      });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('ugra_request');
  };
