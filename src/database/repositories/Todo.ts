import { Repository } from "typeorm";
import { databaseConnection } from "../../";
import { Todo } from "../entities/Todo";

export class TodoRepository {
  private repository: Repository<Todo>;
  constructor() {
    this.repository = databaseConnection.getRepository(Todo);
  }

  public save(todo: { title: string }) {
    return this.repository.save(todo);
  }
}
