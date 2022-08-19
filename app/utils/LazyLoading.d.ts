import { ComponentType, FC } from "react";
declare const LazyLoading: (ImportComponent: () => Promise<{
    default: ComponentType<any>;
}>, { Fallback }: {
    Fallback: FC;
}) => (props: any) => JSX.Element;
export default LazyLoading;
