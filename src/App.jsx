import { lazy, useEffect } from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import { Navbar } from "./Components";

const HomePage = lazy(() => import("./Page/Home/Home"));
const AboutPage = lazy(() => import("./Page/About/About"));
const ComponentsPage = lazy(() => import("./Page/Components/Components"));

import ContextProvider from "./Context/ContextProvider";
import { AnimatePresence } from "motion/react";
function App() {
  const location = useLocation();

  const handleExitComplete = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  return (
    <ContextProvider>
      <Navbar />
      <AnimatePresence mode='wait' onExitComplete={handleExitComplete}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/components' element={<ComponentsPage />} />
        </Routes>
      </AnimatePresence>
    </ContextProvider>
  );
}

export default App;
