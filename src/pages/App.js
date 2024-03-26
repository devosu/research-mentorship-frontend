import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Example from "../components/example";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
