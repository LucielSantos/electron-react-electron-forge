import { ipcMain } from "electron";
import { TodoRepository } from "../database/repositories/Todo";
import { database } from "../preload/constants/database";
import { SaveTodo } from "../types/todo";

ipcMain.handle(database.saveTodo, async (event, todo: SaveTodo) => {
  try {
    const todoRepository = new TodoRepository();

    const createdTodo = await todoRepository.save(todo);

    const allTodos = await todoRepository.getAll();

    event.sender.send(database.onUpdateTodo, allTodos);

    return createdTodo;
  } catch (error) {
    console.log(error);

    return false;
  }
});

ipcMain.handle(database.getAllTodos, async () => {
  try {
    const todoRepository = new TodoRepository();

    const allTodos = await todoRepository.getAll();

    return allTodos;
  } catch (error) {
    console.log(error);

    return false;
  }
});

ipcMain.handle(database.deleteTodo, async (event, id: number | string) => {
  try {
    const todoRepository = new TodoRepository();

    const deletedTodo = await todoRepository.delete(id);

    const allTodos = await todoRepository.getAll();

    event.sender.send(database.onUpdateTodo, allTodos);

    return deletedTodo;
  } catch (error) {
    console.log(error);

    return false;
  }
});
