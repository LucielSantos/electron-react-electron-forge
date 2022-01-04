import { ipcRenderer } from "electron";
import { store } from "./constants";

export const storeMethods = {
  get: (key: string) => ipcRenderer.invoke(store.get, { key }),
  set: (key: string, value: any) => ipcRenderer.send(store.set, { key, value }),
  setCount: (newCount: number) =>
    ipcRenderer.send(store.setCount, { newCount }),
  onChangeCount: (listener: (newValue: any, oldValue: any) => void) => {
    ipcRenderer.on(store.onChangeCount, (event, newValue, oldValue) =>
      listener(newValue, oldValue)
    );
  },
};
