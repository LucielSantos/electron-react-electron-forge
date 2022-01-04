import { ipcMain } from "electron";
import { store as storeConstants } from "../preload/constants";
import { store } from "../";

ipcMain.handle(storeConstants.get, (event, { key }: { key: string }) => {
  return store.get(key);
});

ipcMain.on(
  storeConstants.set,
  (event, { key, value }: { key: string; value: any }) => {
    store.set(key, value);
  }
);

ipcMain.on(
  storeConstants.setCount,
  (event, { newCount }: { newCount: number }) => {
    const oldCount = store.get("count");

    console.log(newCount);

    store.set("count", newCount);

    event.reply(storeConstants.onChangeCount, newCount, oldCount);
  }
);
