import LazyLoading from "utils/LazyLoading";
// import Fallback from "./Loading";
export default LazyLoading(
  () => import(/* webpackChunkName: "Home" */ "./index"),
  {
    Fallback: () => (
      <div>
        <h1>Loading...</h1>
      </div>
    ),
  }
);
