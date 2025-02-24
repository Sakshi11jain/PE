import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MainPage from "./Pages/MainPage";
import ChatInterface from "./Pages/ChatInterface";
import { useState } from "react";
import RefrshHandler from "./RefrshHandler";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/chat-interface" element={<PrivateRoute><ChatInterface /></PrivateRoute>} />
      </Routes>
    </div>
  );
}

export default App;
