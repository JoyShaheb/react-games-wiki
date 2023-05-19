import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ErrorrPage } from "./pages";
import { RootState } from "./store";
import { useSelector } from "react-redux/es/exports";
import { ThemeTypesEnum } from "./types/enum";

const App = () => {
  const theme = useSelector((state: RootState) => state.system.mode);
  useEffect(() => {
    if (theme === ThemeTypesEnum.DARK) {
      document.documentElement.classList.add(ThemeTypesEnum.DARK);
    } else {
      document.documentElement.classList.remove(ThemeTypesEnum.DARK);
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorrPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
