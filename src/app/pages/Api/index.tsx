import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { apiConstants } from "../../../api/constants";
import { ipcRenderer } from "../../../preload/constants";
import { Button } from "../../components";
import * as Styles from "./styles";

export const Api = ({ history }: RouteComponentProps): JSX.Element => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    window.electron.ipcRenderer.on(
      ipcRenderer.on.receiveMessage,
      (newMessage) => {
        console.log("ipcRenderer.on.receiveMessage");
        setMessages((prev) => [newMessage, ...prev]);
      }
    );
  }, []);

  return (
    <Styles.Container>
      <Button onClick={() => history.goBack()}>Voltar</Button>

      <h1>API Page</h1>

      <Styles.Section>
        <p>
          Envie uma requisição POST para &nbsp;
          <code>{`http://${window.electron.ipcRenderer.sendSync(
            ipcRenderer.send.getIp
          )}:${apiConstants.port}/send-message`}</code>
          &nbsp; com o body:
          <br />
          <code>
            {"{"}
            <br />
            &nbsp;
            {`
                "message": "string"
            `}
            <br />
            {"}"}
          </code>
        </p>

        <Styles.Messages>
          <h3>Mensagens recebidas:</h3>

          {messages.map((message, index) => (
            <span key={index}>{message}</span>
          ))}
        </Styles.Messages>
      </Styles.Section>
    </Styles.Container>
  );
};
