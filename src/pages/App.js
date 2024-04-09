import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Yakob from "./Yakob";
import Ziqi from "./Ziqi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yakob" element={<Yakob />} />
        <Route path="/ziqi" element={<Ziqi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
