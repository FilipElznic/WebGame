import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ShipwreckedPage from "./pages/ShipwreckedPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import GamePage from "./pages/GamePage";
import GameStartPage from "./pages/GameStartPage";
import { AuthProtectedRoute, RequireAuth } from "./Components/ProtectedRoute";
import MainMenu from "./pages/Main-menu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/shipwrecked" element={<ShipwreckedPage />} />
      <Route
        path="/login"
        element={
          <AuthProtectedRoute>
            <LoginPage />
          </AuthProtectedRoute>
        }
      />
      <Route
        path="/register"
        element={
          <AuthProtectedRoute>
            <RegisterPage />
          </AuthProtectedRoute>
        }
      />
      <Route
        path="/game"
        element={
          <RequireAuth>
            <GamePage />
          </RequireAuth>
        }
      />
      <Route
        path="/main-menu"
        element={
          <RequireAuth>
            <MainMenu />
          </RequireAuth>
        }
      />
      <Route path="/start" element={<GameStartPage />} />
    </Routes>
  );
}

export default App;
