exports.seed = (knex, Promise) =>
  knex('bears')
    .del()
    .then(() => knex('zoos').del())
    .then(() =>
      knex('zoos')
        .insert(
          [{ name: 'San Diego Zoo' }, { name: 'San Francisco Zoo' }, { name: 'Jacksonville Zoo' }],
          'id'
        )
        .then((zoo) =>
          knex('bears').insert([
            { zooId: zoo[0], species: 'Cute', latinName: 'Ilagpay' },
            { zooId: zoo[0], species: 'Awesome', latinName: 'Lorem' },
            { zooId: zoo[1], species: 'Furry', latinName: 'Ipsum' }
          ])
        )
        .then(() => console.log('Seeding complete!'))
        .catch((err) => console.log(`Error seeding data: ${err}`))
    );
