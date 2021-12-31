import { Repository } from "typeorm";
import { database } from "../../";
import { Todo } from "../entities/Todo";

export class TodoRepository {
  private repository: Repository<Todo>;
  constructor() {
    this.repository = database.connection.getRepository(Todo);
  }

  public save(todo: { title: string }) {
    return this.repository.save(todo);
  }

  public getAll() {
    return this.repository.find();
  }

  public delete(id: number | string) {
    return this.repository.delete(id);
  }
}
