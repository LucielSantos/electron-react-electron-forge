import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { apiConstants } from "../../../api/constants";
import { ipcRenderer } from "../../../preload/constants";
import { Button } from "../../components";
import * as Styles from "./styles";

export const Api = ({ history }: RouteComponentProps): JSX.Element => {
  const [messages, setMessages] = useState<string[]>([]);
  const [ip, setIp] = useState<string>();

  useEffect(() => {
    window.electron.ipcRenderer.on(
      ipcRenderer.on.receiveMessage,
      (newMessage) => {
        setMessages((prev) => [newMessage, ...prev]);
      }
    );

    (async function () {
      const newIp = await window.electron.ipcRenderer.invoke(
        ipcRenderer.send.getIp
      );
      setIp(newIp);
    })();
  }, []);

  return (
    <Styles.Container>
      <Button onClick={() => history.goBack()}>Voltar</Button>

      <h1>API Page</h1>

      <Styles.Section>
        <p>
          Envie uma requisição POST para &nbsp;
          <code>{`http://${ip}:${apiConstants.port}/send-message`}</code>
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
