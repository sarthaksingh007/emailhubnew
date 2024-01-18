import Home from "./component/Home";
import Header from "./component/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/Footer.jsx";
import Price from "./component/Price.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserHubrouters from "./component/Routes/UserHubrouters.js";
import Hubrouters from "./component/Routes/Hubrouters.js";
import IndexRouter from "./component/Routes/IndexRouter.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/price" element={<Price />} />
          <Route index element={<Home />} />
          <Route path="/user" component={<UserHubrouters />} />
          <Route path="/hub" component={<Hubrouters />} />

          <IndexRouter />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
