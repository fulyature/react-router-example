import { Route, Routes } from "react-router-dom";

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import People from "../pages/People";
import Path from "../pages/Path";
import NotFound from "../pages/NotFound";
import PersonDetail from "../pages/PersonDetail";
import Fullstack from "../pages/Fullstack";
import Aws from "../pages/Aws";
import React from "../pages/React";
import Next from "../pages/Next";

const AppRouter = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paths" element={<Path />}>
          <Route path="fullstack" element={<Fullstack />}>
            <Route path="react" elemen={<React />} />
            <Route path="next" elemen={<Next />} />
          </Route>
          <Route path="aws" element={<Aws />} />
        </Route>
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<PersonDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default AppRouter;
