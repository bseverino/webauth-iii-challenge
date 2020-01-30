exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          id: 1,
          username: 'bianca',
          password: 'password',
          department: 'lambda'
        }
      ]);
    });
};
