import Home from "containers/Home/Lazy";
import type { RouteType } from "types/index";

export default [
  {
    id: "Home",
    name: "Home",
    title: "Home",
    component: Home,
    path: "/",
    exact: true,
  },
] as RouteType[];
