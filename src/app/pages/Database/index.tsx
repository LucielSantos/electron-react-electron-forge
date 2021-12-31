import { useEffect, useRef, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Todo } from "../../../database/entities/Todo";
import { Button, Input } from "../../components";
import * as Styles from "./styles";

export const Database = ({ history }: RouteComponentProps): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = async () => {
    await window.electron.database.saveTodo({ title: inputRef.current.value });
  };

  const handleDelete = async (id: number | string) => {
    await window.electron.database.deleteTodo(id);
  };

  useEffect(() => {
    (async function getAllTodos() {
      const allTodos = await window.electron.database.getAllTodos();

      setTodos(allTodos);
    })();

    window.electron.database.onUpdateTodo((allTodos) => {
      setTodos(allTodos);
    });
  }, []);

  return (
    <Styles.Container>
      <Button onClick={() => history.goBack()}>Voltar</Button>

      <h1>Database</h1>

      <Styles.Section>
        <Styles.FormContainer>
          <Input ref={inputRef} label="Titulo do todo" />

          <Button onClick={handleAdd}>+ Add</Button>
        </Styles.FormContainer>

        <Styles.Ul>
          {todos.map((todo) => (
            <Styles.Li key={todo.id}>
              {todo.title}

              <span onClick={() => handleDelete(todo.id)}>x</span>
            </Styles.Li>
          ))}
        </Styles.Ul>
      </Styles.Section>
    </Styles.Container>
  );
};
