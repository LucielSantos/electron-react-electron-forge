import {
  Database,
  IpcRendererInvoke,
  IpcRendererOn,
  IpcRendererSend,
  Store,
} from "../types/electron";
declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        send: IpcRendererSend;
        invoke: IpcRendererInvoke;
        on: IpcRendererOn;
        once: IpcRendererOn;
      };
      database: Database;
      store: Store;
    };
  }
}

export {};
