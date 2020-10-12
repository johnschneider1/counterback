
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('votes').del()
    .then(function () {
      // Inserts seed entries
      return knex('votes').insert([
        { id: 1, click_yes: '1' },
        { id: 2, click_yes: '2' },
        { id: 3, click_yes: '3' }
      ]);
    });
};
