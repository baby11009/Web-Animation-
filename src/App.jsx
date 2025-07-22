import { useEffect, useRef, useState } from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import { Navbar } from "./Components";
import { HomePage, AboutPage } from "./Page";

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
        </Routes>
      </AnimatePresence>
    </ContextProvider>
  );
}

export default App;
