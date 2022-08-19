import LazyLoading from "utils/LazyLoading";
// import Fallback from "./Loading";
export default LazyLoading(
  () => import(/* webpackChunkName: "NotFound" */ "./index"),
  {
    Fallback: () => (
      <div>
        <h1>Loading...</h1>
      </div>
    ),
  }
);
