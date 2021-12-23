import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Store } from "../pages";

export const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />

        <Route path="/store" component={Store} />
      </Switch>
    </BrowserRouter>
  );
};
