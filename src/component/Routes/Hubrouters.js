// import "../App.css";
import SideMenu from "./../Other/SideMenu.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// pages import
import Dashboard from "./../Dashboard.jsx";
import UserProfiles from "./../Admin/UserProfiles.jsx";

import { useSelector } from "react-redux";

import ProfileScreen from "../User/ProfileScreen.jsx";
import PasswordChange from "./../User/PasswordChange.jsx";
import Emailsend from "./../common/EmailSand.jsx";
import DoaminCountry from "./../common/DoaminCountry.jsx";
import UpgradURPlanPart from "./../Other/UpgradURPlanPart.jsx";
import AddDomain from "./../common/AddDomain.jsx";
import EmailExtract from "./../common/EmailExtract.jsx";
import ValidEmailsPart from "./../common/ValidEmailsPart.jsx";
function Hubrouters({ history }) {
  const [inactive, setInactive] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (!userInfo) {
    history.push("/login");
    window.location.reload(false);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`containerall ${inactive ? "inactive" : ""}`}>
          <Route>
            <Route exact path="/hub/Dashbord" component={Dashboard} />
            <Route exact path="/hub/upplan" component={<UpgradURPlanPart />} />
            <Route exact path="/hub/upplan1" component={<UpgradURPlanPart />} />
            <Route exact path="/hub/upplan2" component={<UpgradURPlanPart />} />
            <Route exact path="/hub/upplan3" component={<UpgradURPlanPart />} />
            <Route exact path={"/hub/UserProfile"}>
              <UserProfiles />
            </Route>
            <Route path={"/hub/PasswordChange"}>
              <PasswordChange />
            </Route>

            <Route path={"/hub/Profile"}>
              <ProfileScreen />
            </Route>

            <Route path="/hub/Emailsend" component={<Emailsend />} />
            <Route path="/hub/AddDomain" component={<AddDomain />} />
            <Route path="/hub/DomainCountry" component={<DoaminCountry />} />
            <Route path="/hub/EmailExtract" component={<EmailExtract />} />
            <Route path="/hub/ValidEmail" component={<ValidEmailsPart />} />
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Hubrouters;
