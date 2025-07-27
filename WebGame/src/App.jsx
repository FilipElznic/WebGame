import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ShipwreckedPage from "./pages/ShipwreckedPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/shipwrecked" element={<ShipwreckedPage />} />
    </Routes>
  );
}

export default App;
