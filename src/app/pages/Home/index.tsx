import { RouteComponentProps } from "react-router-dom";
import { Button } from "../../components";
import * as Styles from "./styles";

export const Home = ({ history }: RouteComponentProps): JSX.Element => {
  const handleNavigate = (route: string) => history.push(route);

  return (
    <Styles.Container>
      <h1>Escolha a página</h1>

      <Styles.Nav>
        <Button onClick={() => handleNavigate("/store")}>Store</Button>
      </Styles.Nav>
    </Styles.Container>
  );
};
