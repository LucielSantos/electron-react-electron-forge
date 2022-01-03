import { Todo } from "../database/entities/Todo";
import {
  IpcRendererSendConstants,
  IpcRendererOnConstants,
} from "../preload/constants";
import { SaveTodo } from "../types/todo";

interface IpcRendererOn {
  (
    channel: IpcRendererOnConstants["receiveByMain"],
    listener: (message: string) => void
  ): void;
  (
    channel: IpcRendererOnConstants["receiveMessage"],
    listener: (message: string) => void
  ): void;
}

interface IpcRendererSend {
  (channel: IpcRendererSendConstants["sendToMain"]): void;
  (channel: IpcRendererSendConstants["getIp"]): string;
}

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        send: IpcRendererSend;
        sendSync: IpcRendererSend;
        on: IpcRendererOn;
        once: IpcRendererOn;
      };
      database: {
        saveTodo: (todo: SaveTodo) => Promise<Todo>;
        getAllTodos: () => Promise<Todo[]>;
        onUpdateTodo: (listener: (todos: Todo[]) => void) => void;
        deleteTodo: (id: number | string) => Promise<any>;
      };
      store: {
        get: (key: string) => any;
        set: (key: string, value: any) => void;
        setCount: (newCount: number) => void;
        onChangeCount: (
          listener: (newValue: any, oldValue: any) => void
        ) => void;
      };
    };
  }
}

export {};
