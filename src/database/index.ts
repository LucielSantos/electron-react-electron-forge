import path from "path";
import { Connection, createConnection } from "typeorm";
import { Todo } from "./entities/Todo";
export class DatabaseBuilder {
  public connection: Connection | undefined;

  constructor() {
    this.init();
  }

  public async init(): Promise<void> {
    this.connection = await createConnection({
      type: "sqlite",
      database: path.join("./db.sqlite3"),
      entities: [Todo],
    });

    if (this.connection.isConnected) {
      this.connection.synchronize();
    }
  }
}
