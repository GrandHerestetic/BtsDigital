import "./App.css";
import FirstPanel from "./components/Intro/App";
import Header from "./components/header/Header";
import Vacation from "./components/vacation/App";
import Footer from "./components/footer/App";
import Product from "./components/product/App";
import Team from "./components/team/App";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <FirstPanel />
        <Product />
      </div>
      <Team />
      <div className="App">
        <Vacation/>
      </div>
      <Footer />
    </>
  );
}

export default App;
