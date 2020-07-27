
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Cars').insert([
        { VIN: "2GNFLCEK2C6337026", make: "ford", model: "explorer", Mileage: 190000, TransmissionType: "auto", year: 1998, },
        { VIN: "3GTU2UEC8EG339033", make: "Nissan", model: "Altima", Mileage: 44000, TransmissionType: "auto", year: 2011, titleStatus: "clean" },
        { VIN: "1FM5K8F88DGA36653", make: "Ford", model: "Mustang", Mileage: 18000, TransmissionType: "standard", year: 2017 },
        { VIN: "1N4AL3AP0DC986293", make: "BMW", model: "M3", Mileage: 38000, TransmissionType: "auto", year: 2000, titleStatus: "salvage" },
        { VIN: "4T1BK1FK8CU006915", make: "Mazda", model: "3", Mileage: 87000, TransmissionType: "auto", year: 2013 },

      ]);
    });
};
