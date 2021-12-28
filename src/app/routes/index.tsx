import { Redirect, Route, Switch, HashRouter } from "react-router-dom";
import { Home, Store, IpcMain } from "../pages";

export const Routes = (): JSX.Element => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/store" exact component={Store} />

        <Route path="/ipc-main" exact component={IpcMain} />

        <Redirect to="/" />
      </Switch>
    </HashRouter>
  );
};
