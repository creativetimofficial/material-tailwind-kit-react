import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import { Home, AboutUs, MeetingNotes, Agenda } from "@/pages";

function App() {
  const { pathname } = useLocation();

  return (
    <>
      {(
        <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
          <Navbar routes={routes} />
        </div>
      )}
      <Routes>
        {/* Main routes */}
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}

        {/* Committee dropdown routes */}
        <Route path="/committee/about-us" element={<AboutUs />} />
        <Route path="/committee/meeting-notes" element={<MeetingNotes />} />
        <Route path="/committee/agenda" element={<Agenda />} />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;