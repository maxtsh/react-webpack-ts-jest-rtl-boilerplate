import { resolve } from "path";
const alias = {
  utils: resolve(__dirname, "../../app/utils/"),
  routes: resolve(__dirname, "../../app/routes/"),
  types: resolve(__dirname, "../../app/types/"),
  containers: resolve(__dirname, "../../app/containers/"),
  components: resolve(__dirname, "../../app/components/"),
  styles: resolve(__dirname, "../../app/styles/"),
  libs: resolve(__dirname, "../../app/libs/"),
  tests: resolve(__dirname, "../../app/tests/"),
};
export default alias;
