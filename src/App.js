import { Routes, Route } from "react-router-dom";
import Home from "./Router/Home/Home";
import AboutR from "./Router/About-R/AboutR";
import TeamR from "./Router/TeamR";
import ContactR from "./Router/ContactR";
import EventR from "./Router/EventR";
import ProjectR from "./Router/ProjectR";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutR />} />
        <Route path="/team" element={<TeamR />} />
        <Route path="/contact" element={<ContactR />} />
        <Route path="/event" element={<EventR />} />
        <Route path="/project" element={<ProjectR />} />
      </Routes>
    </div>
  );
}

export default App;
