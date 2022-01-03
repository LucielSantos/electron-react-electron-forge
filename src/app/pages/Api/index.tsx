import { RouteComponentProps } from "react-router-dom";
import { Button } from "../../components";
import * as Styles from "./styles";

export const Api = ({ history }: RouteComponentProps): JSX.Element => {
  return (
    <Styles.Container>
      <Button onClick={() => history.goBack()}>Voltar</Button>

      <h1>API Page</h1>

      <Styles.Section>PAGE</Styles.Section>
    </Styles.Container>
  );
};
