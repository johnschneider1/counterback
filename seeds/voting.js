
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { id: 1, colName: '1' },
        { id: 2, colName: '2' },
        { id: 3, colName: '3' }
      ]);
    });
};
