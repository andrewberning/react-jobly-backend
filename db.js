"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri } = require("./config");

// let db;
let DB_URI;

if (process.env.NODE_ENV === "test") {
  DB_URI = "postgresql:///jobly_test";
} else {
  DB_URI = "postgres://pvwplfai:2Hos-4qjcGP3RcgCUVV-TXu5Zgs_tEsq@bubble.db.elephantsql.com/pvwplfai";
}

let db = new Client({
  connectionString: DB_URI
});

db.connect();

module.exports = db;