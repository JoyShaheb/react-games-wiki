import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ErrorrPage, Games, Platforms } from "./pages";
import Sidebar from "./components/SideBar/SideBar";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="*" element={<ErrorrPage />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
