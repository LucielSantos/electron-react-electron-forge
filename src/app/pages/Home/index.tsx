import { RouteComponentProps } from "react-router-dom";
import { Button } from "../../components";
import { routePaths } from "../../constants/routes";
import * as Styles from "./styles";

export const Home = ({ history }: RouteComponentProps): JSX.Element => {
  const handleNavigate = (route: string) => history.push(route);

  return (
    <Styles.Container>
      <h1>Escolha a página</h1>

      <Styles.Nav>
        <Button onClick={() => handleNavigate(routePaths.ipcMain)}>
          IpcMain
        </Button>

        <Button onClick={() => handleNavigate(routePaths.store)}>Store</Button>

        <Button onClick={() => handleNavigate(routePaths.database)}>
          Database
        </Button>

        <Button onClick={() => handleNavigate(routePaths.api)}>API</Button>
      </Styles.Nav>
    </Styles.Container>
  );
};
