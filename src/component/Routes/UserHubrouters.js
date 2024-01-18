// import "../App.css";

import SubSideMenu from "./../Other/SideMenu.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

// pages import
import Dashboard from "./../Dashboard.jsx";

import { useSelector } from "react-redux";
// import ProfileScreen from "../components/Application/ProfileScreen/SubProfileScreen";
import ProfileScreen from "../User/ProfileScreen.jsx";
// import PasswordChange from "../components/Application/ProfileScreen/PasswordChange";
import PasswordChange from "./../User/PasswordChange.jsx";
// import Emailsend from "../Pages/SendEmailPagesUI/Componets/EmailSand";
import Emailsend from "./../common/EmailSand.jsx";
// import DoaminCountry from "../Pages/SendEmailPagesUI/Componets/DoaminCountry";
import DoaminCountry from "./../common/DoaminCountry.jsx";
import UpgradURPlanPart from "./../Other/UpgradURPlanPart.jsx";
// import AddDomain from "../Pages/SendEmailPagesUI/Pages/AddDomain";
import AddDomain from "./../common/AddDomain.jsx";
import EmailExtract from "./../common/EmailExtract.jsx";
import ValidEmailsPart from "./../common/ValidEmailsPart.jsx";
import HorizontalLinearStepper from "../common/HorizontalStepper.jsx";

function UserHubrouters({ history }) {
  const [inactive, setInactive] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log("users", userLogin);
  if (!userInfo) {
    history.push("/login");
    window.location.reload(false);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <SubSideMenu
          onCollapse={(inactive) => {
            setInactive(inactive);
          }}
        />

        <div className={`containerall ${inactive ? "inactive" : ""}`}>
          <Routes>
            <Route exact path="/user/Dashbord" component={Dashboard} />
            <Route exact path="/user/upplan" component={AddDomain} />
            <Route
              exact
              path="/user/upplan1"
              component={
                userInfo.applicationAccess1 ? DoaminCountry : UpgradURPlanPart
              }
            />
            <Route
              exact
              path="/user/upplan2"
              component={
                userInfo.applicationAccess2 ? EmailExtract : UpgradURPlanPart
              }
            />
            <Route
              exact
              path="/user/upplan3"
              component={
                userInfo.applicationAccess3 ? ValidEmailsPart : UpgradURPlanPart
              }
            />

            <Route path={"/user/PasswordChange"}>
              <PasswordChange />
            </Route>

            <Route path={"/user/Profile"}>
              <ProfileScreen />
            </Route>
            
            <Route path="/user/stepper" component={HorizontalLinearStepper} />

            <Route
              path="/user/Emailsend"
              component={
                userInfo.applicationAccess4 ? Emailsend : UpgradURPlanPart
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default UserHubrouters;
