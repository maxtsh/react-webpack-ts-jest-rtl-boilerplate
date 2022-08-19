import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllRoutes from "routes/index";
import NotFound from "containers/NotFound";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {AllRoutes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={<route.component />}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
