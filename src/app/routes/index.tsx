import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../pages";

export const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
