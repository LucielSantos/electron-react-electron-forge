import { useEffect, useState } from "react";
import { ipcRenderer } from "../../../preload/constants";
import { Button } from "../../components";
import * as Styles from "./styles";

export const IpcMain = (): JSX.Element => {
  const [messages, setMessage] = useState<string[]>([]);
  const handleSendToMain = () => {
    window.electron.ipcRenderer.send(ipcRenderer.send.sendToMain);
  };

  useEffect(() => {
    window.electron.ipcRenderer.on(ipcRenderer.on.receiveByMain, (message) => {
      setMessage((prev) => [...prev, message]);
    });
  }, []);

  return (
    <Styles.Container>
      <h1>IpcMain Page</h1>

      <Styles.Section>
        <Styles.ButtonsContainer>
          <Button onClick={handleSendToMain}>
            Enviar evento para processo MAIN
          </Button>

          <Button onClick={() => setMessage([])}>Limpar</Button>
        </Styles.ButtonsContainer>

        <Styles.Messages>
          {messages.map((message, index) => (
            <p key={index}>{message}</p>
          ))}
        </Styles.Messages>
      </Styles.Section>
    </Styles.Container>
  );
};
