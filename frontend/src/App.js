import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Jokes from "./pages/Jokes";
import Add from "./pages/Add";
import Update from "./pages/Update";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Jokes />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
