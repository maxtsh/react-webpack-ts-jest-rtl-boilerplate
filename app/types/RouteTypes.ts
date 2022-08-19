import { FC } from "react";

export interface RouteType {
  id: string;
  name: string;
  title: string;
  component: FC;
  path: string;
  exact: boolean;
}
