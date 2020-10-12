
exports.up = function (knex) {
    return knex.schema
        .createTable("votes", (tbl) => {
            tbl.increments();
            tbl.string("click_yes", 128).notNullable();
        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("votes")

};
