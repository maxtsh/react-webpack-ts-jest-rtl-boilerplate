import { ComponentType } from "react";
declare const lazyWithRetry: (componentImport: () => Promise<{
    default: ComponentType<any>;
}>) => import("react").LazyExoticComponent<ComponentType<any>>;
export default lazyWithRetry;
