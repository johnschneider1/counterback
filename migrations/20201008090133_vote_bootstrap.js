
exports.up = function (knex) {
    return knex.schema
        .createTable("votes", (tbl) => {
            tbl.increments();
            tbl.integer("click_yes").notNullable().defaultTo(0);
        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("votes")

};
