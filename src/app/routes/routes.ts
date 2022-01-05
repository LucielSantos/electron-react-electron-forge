import { ComponentType } from "react";
import { routePaths } from "../constants/routes";
import { Api, Database, Home, IpcMain, Store } from "../pages";

export interface IRoute {
  path: string;
  component: ComponentType<any>;
  exact?: boolean;
}

export const adminRoutes: IRoute[] = [];

export const publicRoutes: IRoute[] = [
  {
    path: routePaths.api,
    component: Api,
    exact: true,
  },
  {
    path: routePaths.database,
    component: Database,
    exact: true,
  },
  {
    path: routePaths.home,
    component: Home,
    exact: true,
  },
  {
    path: routePaths.ipcMain,
    component: IpcMain,
    exact: true,
  },
  {
    path: routePaths.store,
    component: Store,
    exact: true,
  },
];
