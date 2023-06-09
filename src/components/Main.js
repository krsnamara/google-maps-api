import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import MapAPI from "./MapAPI/MapAPI";
// import Marker from "./Markers/Marker";

function Main() {
  return (
    <main>
      <Routes>
        <Route
          exact
          path="/hello"
          element={<MapAPI />}
        />
        {/* <Route
          path="/markers"
          element={<Marker />}
        /> */}
        <Route
          path="/right"
          element={<Home />}
        />
      </Routes>
    </main>
  );
}

export default Main;
