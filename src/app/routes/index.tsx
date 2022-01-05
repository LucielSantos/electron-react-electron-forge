import { Redirect, Switch, HashRouter } from "react-router-dom";
import { routePaths } from "../constants/routes";
import { PublicRoutes } from "./PublicRoutes";
import { AdminRoutes } from "./withLayout";

export const Routes = (): JSX.Element => {
  return (
    <HashRouter>
      <Switch>
        {PublicRoutes()}
        {AdminRoutes()}

        <Redirect to={routePaths.home} />
      </Switch>
    </HashRouter>
  );
};
