import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import MapAPI from "./MapAPI/MapAPI";
import Marker from "./Markers/Marker";

function Main() {
  return (
    <main>
      <Routes>
        <Route
          exact
          path="/hello"
          element={<Home />}
        />
        <Route
          path="/right"
          element={<MapAPI />}
        />
        <Route
          path="/map"
          element={<Marker />}
        />
      </Routes>
    </main>
  );
}

export default Main;
