import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import AddNote from "./components/AddNote";
import AllNotes from "./components/AllNotes";
import UpdateNote from "./components/UpdateNote";

function App() {
  return (
    <div className="sm:px-5 max-w-screen-xl mt-3 lg:px-8 mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-note" element={<AddNote />} />
        <Route path="/all-note" element={<AllNotes />} />
        <Route path="/update-note/:id" element={<UpdateNote/>} />
      </Routes>
    </div>
  );
}

export default App;
