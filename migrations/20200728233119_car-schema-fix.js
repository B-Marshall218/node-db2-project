
exports.up = function (knex) {
    return knex.schema.createTable("Cars", tbl => {
        tbl.increments("car_id");
        tbl.integer("VIN").unique().notNullable();
        tbl.string("Make", 128).notNullable();
        tbl.string("Model", 128).notNullable();
        tbl.integer("Mileage").notNullable();
        tbl.string("TransmissionType", 20);
        tbl.text("TitleStatus")
        tbl.integer("year", 4)
        tbl.boolean("new").defaultTo(false)
    })

};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("Cars")
};
