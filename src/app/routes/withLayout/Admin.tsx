import { Admin } from "../../layout/Admin";
import { PrivateRoute } from "../components";
import { adminRoutes } from "../routes";

export const AdminRoutes = () =>
  adminRoutes.map((route, index) => (
    <PrivateRoute
      key={`admin-route-${index}`}
      wrapComponent={Admin}
      {...route}
    />
  ));
