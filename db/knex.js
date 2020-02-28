const environment = "development";
import knexConfig from "../knexfile";
import knex from "knex";
const config = knexConfig[environment];

export default knex(config);
