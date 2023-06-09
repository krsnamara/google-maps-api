import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
// import MapAPI from "./MapAPI/MapAPI";
import Markers from "./Markers/Markers";

function Main() {
  return (
    <main>
      <Routes>
        {/* <Route
          exact
          path="/hello"
          element={<MapAPI />}
        /> */}
        <Route
          path="/markers"
          element={<Markers />}
        />
        <Route
          path="/right"
          element={<Home />}
        />
      </Routes>
    </main>
  );
}

export default Main;
