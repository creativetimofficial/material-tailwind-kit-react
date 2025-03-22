import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 overflow-hidden p-4 ">
        <Navbar routes={routes} />
      </div>
      <div className=" overflow-hidden">
        <Routes>
          {routes.map(
            ({ path, element }, key) =>
              element && <Route key={key} exact path={path} element={element} />
          )}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
