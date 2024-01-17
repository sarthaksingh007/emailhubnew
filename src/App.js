import Home from "./component/Home";
import Header from "./component/Header.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./component/Footer.jsx"
import Price from "./component/Price.jsx"
function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      <Price/>
      <Footer/>
    </div>
  );
}

export default App;
