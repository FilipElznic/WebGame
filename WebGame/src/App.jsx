import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ShipwreckedPage from "./pages/ShipwreckedPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import GamePage from "./pages/GamePage";
import GameStartPage from "./pages/GameStartPage";
import { AuthProtectedRoute, RequireAuth } from "./Components/ProtectedRoute";
import { XPProtectedRoute } from "./Components/XPProtectedRoute";
import { UserDataProvider } from "./Components/UserDataProvider";
import MainMenu from "./pages/Main-menu";
import PCOnlyPopup from "./Components/PCOnlyPopup";
import Stage1Page from "./pages/Stage1Page";
import Stage2Page from "./pages/Stage2Page";
import Stage3Page from "./pages/Stage3Page";
import Stage4Page from "./pages/Stage4Page";
import Stage5Page from "./pages/Stage5Page";
import Stage6Page from "./pages/Stage6Page";
import Stage1PageInternet from "./pages/Stage1PageInternet";
import Peter from "./Components/Peter";
import Stage1PageInternet2 from "./pages/Stage1PageInternet2";
import HelpPage from "./pages/HelpPage";
import PrivacyPage from "./pages/PrivacyPage";
import FeedbackPage from "./pages/FeedbackPage";
import EndRestore from "./pages/EndRestore";
import EndShutdown from "./pages/EndShutdown";
import EndPreserve from "./pages/EndPreserve";
import Subtitles from "./Components/Subtitles";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <PCOnlyPopup />
      <UserDataProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/shipwrecked" element={<ShipwreckedPage />} />
          <Route path="/peter" element={<Peter />} />
          <Route path="/about" element={<AboutPage />} />

          <Route
            path="/restore"
            element={
              <RequireAuth>
                <XPProtectedRoute requiredStage={6}>
                  <EndRestore />
                </XPProtectedRoute>
              </RequireAuth>
            }
          />
          <Route
            path="/shutdown"
            element={
              <RequireAuth>
                <XPProtectedRoute requiredStage={6}>
                  <EndShutdown />
                </XPProtectedRoute>
              </RequireAuth>
            }
          />
          <Route
            path="/preserve"
            element={
              <RequireAuth>
                <XPProtectedRoute requiredStage={6}>
                  <EndPreserve />
                </XPProtectedRoute>
              </RequireAuth>
            }
          />
          <Route
            path="/subtitles"
            element={
              <RequireAuth>
                <XPProtectedRoute requiredStage={6}>
                  <Subtitles />
                </XPProtectedRoute>
              </RequireAuth>
            }
          />

          <Route
            path="/login"
            element={
              <AuthProtectedRoute>
                <LoginPage />
              </AuthProtectedRoute>
            }
          />

          <Route
            path="/stage1"
            element={
              <RequireAuth>
                <XPProtectedRoute requiredStage={1}>
                  <Stage1Page />
                </XPProtectedRoute>
              </RequireAuth>
            }
          />
          <Route
            path="/stage1internet"
            element={
              <RequireAuth>
                <XPProtectedRoute requiredStage={1}>
                  <Stage1PageInternet />
                </XPProtectedRoute>
              </RequireAuth>
            }
          />
          <Route
            path="/stage1internet2"
            element={
              <RequireAuth>
                <XPProtectedRoute requiredStage={1}>
                  <Stage1PageInternet2 />
                </XPProtectedRoute>
              </RequireAuth>
            }
          />
          <Route
            path="/stage2"
            element={
              <RequireAuth>
                <XPProtectedRoute requiredStage={2}>
                  <Stage2Page />
                </XPProtectedRoute>
              </RequireAuth>
            }
          />
          <Route
            path="/stage3"
            element={
              <RequireAuth>
                <XPProtectedRoute requiredStage={3}>
                  <Stage3Page />
                </XPProtectedRoute>
              </RequireAuth>
            }
          />
          <Route
            path="/stage4"
            element={
              <RequireAuth>
                <XPProtectedRoute requiredStage={4}>
                  <Stage4Page />
                </XPProtectedRoute>
              </RequireAuth>
            }
          />
          <Route
            path="/stage5"
            element={
              <RequireAuth>
                <XPProtectedRoute requiredStage={5}>
                  <Stage5Page />
                </XPProtectedRoute>
              </RequireAuth>
            }
          />
          <Route
            path="/stage6"
            element={
              <RequireAuth>
                <XPProtectedRoute requiredStage={6}>
                  <Stage6Page />
                </XPProtectedRoute>
              </RequireAuth>
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
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
      </UserDataProvider>
    </>
  );
}

export default App;
