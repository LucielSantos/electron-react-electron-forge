import { contextBridge } from "electron";
import { databaseMethods } from "./database";
import { ipcRendererMethods } from "./ipcRenderer";
import { storeMethods } from "./store";

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object

const allMethods = {
  ipcRenderer: ipcRendererMethods,
  store: storeMethods,
  database: databaseMethods,
};

contextBridge.exposeInMainWorld("electron", allMethods);
