import { Route } from "react-router-dom";
import { publicRoutes as routes } from "./routes";

export const PublicRoutes = () =>
  routes.map((route, index) => (
    <Route key={`public-route-${index}`} {...route} />
  ));
