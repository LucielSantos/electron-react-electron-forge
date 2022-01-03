import { Redirect, Route, Switch, HashRouter } from "react-router-dom";
import { Home, Store, IpcMain, Database, Api } from "../pages";

export const Routes = (): JSX.Element => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/store" exact component={Store} />

        <Route path="/ipc-main" exact component={IpcMain} />

        <Route path="/database" exact component={Database} />

        <Route path="/api" exact component={Api} />

        <Redirect to="/" />
      </Switch>
    </HashRouter>
  );
};
