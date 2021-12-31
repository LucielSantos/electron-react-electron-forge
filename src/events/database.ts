import { ipcMain } from "electron";
import { TodoRepository } from "../database/repositories/Todo";
import { database } from "../preload/constants/database";
import { SaveTodo } from "../types/todo";

ipcMain.on(database.saveTodo, async (event, todo: SaveTodo) => {
  try {
    const todoRepository = new TodoRepository();

    const createdTodo = await todoRepository.save(todo);

    const allTodos = await todoRepository.getAll();

    event.reply(database.onUpdateTodo, allTodos);

    return (event.returnValue = createdTodo);
  } catch (error) {
    console.log(error);

    return false;
  }
});

ipcMain.on(database.getAllTodos, async (event) => {
  try {
    const todoRepository = new TodoRepository();

    const allTodos = await todoRepository.getAll();

    return (event.returnValue = allTodos);
  } catch (error) {
    console.log(error);

    return false;
  }
});

ipcMain.on(database.deleteTodo, async (event, id: number | string) => {
  try {
    const todoRepository = new TodoRepository();

    const deletedTodo = await todoRepository.delete(id);

    const allTodos = await todoRepository.getAll();

    event.reply(database.onUpdateTodo, allTodos);

    return (event.returnValue = deletedTodo);
  } catch (error) {
    console.log(error);

    return false;
  }
});
