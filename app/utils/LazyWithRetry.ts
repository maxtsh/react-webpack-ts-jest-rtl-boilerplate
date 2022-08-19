import { lazy, ComponentType } from "react";
const lazyWithRetry = (
  componentImport: () => Promise<{ default: ComponentType<any> }>
) =>
  lazy(async () => {
    for (let i = 10; i >= 0; i -= 1) {
      try {
        return await componentImport();
      } catch (error) {
        if (i === 0) throw error;
      }
    }
    return await componentImport();
  });
export default lazyWithRetry;
