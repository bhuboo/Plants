import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginsignUp from "./screens/LoginSignup/Forms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginsignUp />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
