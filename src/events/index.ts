import { ipcMain } from "electron";
import { ipcRenderer } from "../preload/constants";
import "./store";

ipcMain.on(ipcRenderer.send.sendToMain, (event) => {
  console.log("sent-to-main");

  event.reply(ipcRenderer.on.receiveByMain, "message-by-main");
});
