import { ipcRenderer } from "electron";

export const ipcRendererMethods = {
  send: (channel: string, ...args: any[]) => ipcRenderer.send(channel, ...args),
  invoke: (channel: string, ...args: any[]) =>
    ipcRenderer.invoke(channel, ...args),
  on: (channel: string, listener: (...args: any[]) => void) => {
    ipcRenderer.on(channel, (event, ...args) => listener(...args));
  },
  once: (channel: string, listener: (...args: any[]) => void) => {
    ipcRenderer.once(channel, (event, ...args) => listener(...args));
  },
};
