import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRouter from "./AppRouter";
import Home from "../Home.jsx";

const IndexRouter = () => {
  return (
    <>
      {/* <Router>
        <Switch>
          <Route exact path={["/", "/Home", "/home"]} component={Home} />

         
          
        </Switch>
      </Router> */}
      <BrowserRouter>
        <Routes>
          <Route exact path={["/", "/Home", "/home"]} component={<Home />} />
          <AppRouter />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default IndexRouter;
