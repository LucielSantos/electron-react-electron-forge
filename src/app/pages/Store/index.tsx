import { useEffect, useState } from "react";
import { Button } from "../../components";
import * as Styles from "./styles";

export const Store = (): JSX.Element => {
  const [count, setCount] = useState<number>(
    window.electron.store.get("count")
  );

  const changeCount = (expression: "+" | "-") => {
    console.log("add");

    window.electron.store.setCount(expression === "+" ? count + 1 : count - 1);
  };

  useEffect(() => {
    window.electron.store.onChangeCount((newValue) => {
      setCount(newValue);
    });
  }, []);

  return (
    <Styles.Container>
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
