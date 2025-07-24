import { useEffect, useRef, useState, lazy } from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import { Navbar } from "./Components";
// import { HomePage, AboutPage, ComponentsPage } from "./Page";

const HomePage = lazy(() => import("./Page/Home/Home"));
const AboutPage = lazy(() => import("./Page/About/About"));
const ComponentsPage = lazy(() => import("./Page/Components/Components"));

import ContextProvider from "./Context/ContextProvider";
import { AnimatePresence } from "motion/react";
function App() {
  const location = useLocation();

  return (
    <ContextProvider>
      <Navbar />
      <AnimatePresence mode='wait'>
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
