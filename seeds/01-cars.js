
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('vehicles').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('vehicles').insert([
        { year: 1998, new: false }
      ]);
    });
};



        //{ VIN: "122323423", make: "ford", model: "explorer", TransmissionType: "auto" },
