import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";

export const App = (): JSX.Element => {
  return (
    <>
      <Routes />;
      <GlobalStyle />
    </>
  );
};
