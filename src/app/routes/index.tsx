import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Home, Store } from "../pages";

export const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/store" exact component={Store} />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};
