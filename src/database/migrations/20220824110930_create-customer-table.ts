import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("customer", (table) => {
    table.uuid("id").primary();
    table.string("name").notNullable();
    table.string("city");
  });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("customer");
}
