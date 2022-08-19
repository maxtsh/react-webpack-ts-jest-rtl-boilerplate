import { ComponentType, FC, Suspense } from "react";
import lazyWithRetry from "./LazyWithRetry";

const LazyLoading = (
  ImportComponent: () => Promise<{ default: ComponentType<any> }>,
  { Fallback }: { Fallback: FC }
) => {
  // const LazyComponent = lazy(ImportComponent); // Normal lazy
  const LazyComponent = lazyWithRetry(ImportComponent); // Retry Policy lazy
  return (props: any) => (
    <Suspense fallback={<Fallback />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
export default LazyLoading;
