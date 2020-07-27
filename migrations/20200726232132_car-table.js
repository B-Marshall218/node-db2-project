
exports.up = function (knex) {
    return knex.schema.table("Cars", tbl => {
        tbl.integer("year", 8);
    })
};

exports.down = function (knex) {
    return knex.schema.table("Cars", tbl => {
        tbl.dropColumn("year");
    })
};
