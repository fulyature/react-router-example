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
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paths" element={<Path />}>
          <Route index element={<Fullstack />} />
          <Route path="fullstack" element={<Fullstack />}>
            <Route index element={<React />} />
            <Route path="next" element={<Next />} />
          </Route>
          <Route path="aws" element={<Aws />} />
        </Route>
        <Route element={<PrivateRouter />}>
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<PersonDetail />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default AppRouter;
