import { BrowserRouter, Routes, Route } from "react-router-dom";
import StaticPage from "./staticPage";
import DynamicPage from "./dynamicPage";
import './App.css';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<StaticPage />} />
      <Route path="/dynamic" element={<DynamicPage />} />
    </Routes>
  </BrowserRouter>
}

export default App;
