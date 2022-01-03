import { Router } from "express";
import { mainWindow } from "..";
import { ipcRenderer } from "../preload/constants";

const router = Router();

router.use((req, res, next) => {
  console.log(`[${req.method}] - ${req.url}`);

  next();
});

router.get("/health-check", (req, res) => {
  res.status(200).send({ message: "ok" });
});

router.post("/send-message", (req, res) => {
  const body = req.body as { message: string };

  mainWindow.webContents.send(ipcRenderer.on.receiveMessage, body.message);

  res.status(200).send({ message: "Message is sent" });
});

export { router };
