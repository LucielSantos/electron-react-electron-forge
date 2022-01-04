import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Button } from "../../components";
import * as Styles from "./styles";

export const Store = ({ history }: RouteComponentProps): JSX.Element => {
  const [count, setCount] = useState<number>();

  const changeCount = (expression: "+" | "-") => {
    console.log("add");

    window.electron.store.setCount(expression === "+" ? count + 1 : count - 1);
  };

  useEffect(() => {
    window.electron.store.onChangeCount((newValue) => {
      setCount(newValue);
    });

    (async function (){
      const newCount = await window.electron.store.get("count")

      setCount(newCount)
    })()
  }, []);

  return (
    <Styles.Container>
      <Button onClick={() => history.goBack()}>Voltar</Button>

      <h1>Store Page</h1>

      <Styles.Section>
        <Styles.ButtonsContainer>
          <Button onClick={() => changeCount("+")}>+</Button>

          <Button onClick={() => changeCount("-")}>-</Button>
        </Styles.ButtonsContainer>

        <Styles.Body>{count}</Styles.Body>
      </Styles.Section>
    </Styles.Container>
  );
};
