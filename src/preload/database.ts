import { ipcRenderer } from "electron";
import { Todo } from "../database/entities/Todo";
import { SaveTodo } from "../types/todo";
import { database } from "./constants/database";

export const databaseMethods = {
  saveTodo: (todo: SaveTodo) => ipcRenderer.invoke(database.saveTodo, todo),
  getAllTodos: () =>  ipcRenderer.invoke(database.getAllTodos),
  onUpdateTodo: (listener: (todos: Todo[]) => void) => {
    ipcRenderer.on(database.onUpdateTodo, (event, todos: Todo[]) =>
      listener(todos)
    );
  },
  deleteTodo: (id: number | string) =>  ipcRenderer.invoke(database.deleteTodo, id),
};
