import { ipcRenderer } from "electron";
import { Todo } from "../database/entities/Todo";
import { SaveTodo } from "../types/todo";
import { database } from "./constants/database";

export const databaseMethods = {
  saveTodo: (todo: SaveTodo) => {
    return ipcRenderer.sendSync(database.saveTodo, todo);
  },
  getAllTodos: () => {
    return ipcRenderer.sendSync(database.getAllTodos);
  },
  onUpdateTodo: (listener: (todos: Todo[]) => void) => {
    ipcRenderer.on(database.onUpdateTodo, (event, todos: Todo[]) =>
      listener(todos)
    );
  },
  deleteTodo: (id: number | string) => {
    return ipcRenderer.sendSync(database.deleteTodo, id);
  },
};
