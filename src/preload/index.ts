import { contextBridge, ipcRenderer } from "electron";
import { store } from "./constants";
import { databaseMethods } from "./database";

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object

const ipcRendererMethods = {
  send: (channel: string, ...args: any[]) => {
    return ipcRenderer.send(channel, ...args);
  },
  on: (channel: string, listener: (...args: any[]) => void) => {
    ipcRenderer.on(channel, (event, ...args) => listener(...args));
  },
};

const storeMethods = {
  get: (key: string) => ipcRenderer.sendSync(store.get, { key }),
  set: (key: string, value: any) => ipcRenderer.send(store.set, { key, value }),
  setCount: (newCount: number) =>
    ipcRenderer.send(store.setCount, { newCount }),
  onChangeCount: (listener: (newValue: any, oldValue: any) => void) => {
    ipcRenderer.on(store.onChangeCount, (event, newValue, oldValue) =>
      listener(newValue, oldValue)
    );
  },
};

const allMethods = {
  ipcRenderer: ipcRendererMethods,
  store: storeMethods,
  database: databaseMethods,
};

contextBridge.exposeInMainWorld("electron", allMethods);
