import { ComponentType, memo } from "react";
import { Route, Redirect } from "react-router-dom";
import { routePaths } from "../../constants/routes";
import { verifyAuthentication } from "../../utils/authorization";
import { IRoute } from "../routes";

interface RoutePrivateProps extends IRoute {
  wrapComponent?: ComponentType<any>;
}

function PrivateRouteComponent({
  component: Component,
  exact,
  path,
  wrapComponent: WrapComponent,
  ...rest
}: RoutePrivateProps): JSX.Element {
  return (
    <Route
      {...rest}
      path={path}
      exact={exact || false}
      render={(props) =>
        verifyAuthentication() ? (
          WrapComponent ? (
            <WrapComponent>
              <Component {...(props as any)} />
            </WrapComponent>
          ) : (
            <Component {...(props as any)} />
          )
        ) : (
          <Redirect to={{ pathname: routePaths.home }} />
        )
      }
    />
  );
}

export const PrivateRoute = memo(PrivateRouteComponent);
