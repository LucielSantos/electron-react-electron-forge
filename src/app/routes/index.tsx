import { createHashHistory } from "history";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  HashRouter,
} from "react-router-dom";
import { Home, Store } from "../pages";

const history = createHashHistory();

export const Routes = (): JSX.Element => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/store" exact component={Store} />

        <Redirect to="/" />
      </Switch>
    </HashRouter>
  );
};
