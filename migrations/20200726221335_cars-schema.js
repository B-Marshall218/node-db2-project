
exports.up = function (knex) {
    return knex.schema.createTable("vehicles", tbl => {
        tbl.increments();
        tbl.integer("year", 8)
        tbl.boolean("new").defaultTo(false)
    })

};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists("vehicle")
};
