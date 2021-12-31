import { createConnection, Connection } from "typeorm";
import { Todo } from "./entities/Todo";

let connection: Connection;

async function buildConnection() {
  connection = await createConnection({
    type: "sqlite",
    database: `${__dirname}/database.sqlite3`,
    entities: [Todo],
  });
}

buildConnection();

export const databaseConnection = connection;
