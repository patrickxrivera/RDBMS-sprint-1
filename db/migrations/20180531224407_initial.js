exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable('zoos', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.timestamp('createdAt').defaultTo(knex.fn.now());
    }),

    knex.schema.createTable('bears', (table) => {
      table.increments('id').primary();
      table.integer('zooId').unsigned();
      table.foreign('zooId').references('zoos.id');
      table.string('species', 80);
      table.string('latinName', 80);
      table.timestamp('createdAt').defaultTo(knex.fn.now());
    })
  ]);

exports.down = (knex, Promise) =>
  Promise.all([knex.schema.dropTable('bears'), knex.schema.dropTable('zoos')]);
