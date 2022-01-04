import { ipcMain } from "electron";
import ip from "ip";
import { ipcRenderer } from "../preload/constants";

ipcMain.on(ipcRenderer.send.sendToMain, (event) => {
  console.log("sent-to-main");

  event.reply(ipcRenderer.on.receiveByMain, "message-by-main");
});

ipcMain.handle(ipcRenderer.send.getIp, async () => {
  return ip.address();
});
