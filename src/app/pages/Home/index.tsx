import { RouteComponentProps } from "react-router-dom";
import { Button } from "../../components";
import * as Styles from "./styles";

export const Home = ({ history }: RouteComponentProps): JSX.Element => {
  const handleNavigate = (route: string) => history.push(route);

  return (
    <Styles.Container>
      <h1>Escolha a página</h1>

      <Styles.Nav>
        <Button onClick={() => handleNavigate("/ipc-main")}>IpcMain</Button>

        <Button onClick={() => handleNavigate("/store")}>Store</Button>

        <Button onClick={() => handleNavigate("/database")}>Database</Button>

        <Button onClick={() => handleNavigate("/api")}>API</Button>
      </Styles.Nav>
    </Styles.Container>
  );
};
