import { Todo } from "../../database/entities/Todo";
import { SaveTodo } from "../todo";

export interface Database {
  saveTodo: (todo: SaveTodo) => Promise<Todo>;
  getAllTodos: () => Promise<Todo[]>;
  onUpdateTodo: (listener: (todos: Todo[]) => void) => void;
  deleteTodo: (id: number | string) => Promise<any>;
}
