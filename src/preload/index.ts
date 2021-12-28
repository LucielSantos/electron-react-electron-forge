import { contextBridge, ipcRenderer } from "electron";

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

const allMethods = {
  ipcRenderer: ipcRendererMethods,
};

contextBridge.exposeInMainWorld("electron", allMethods);
