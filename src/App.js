import "./App.css";
import Team from "./components/team/team";
import Cta from "./components/cta/cta";
import Footer from "./components/footer/footer";
import Review from "./components/review/review";
import Cards from "./components/cards/cards";
import Info from "./components/info/info";
import Carousel from "./components/carousel/carousel";
import About from "./components/about/about";

function App() {
  return (
    <div className="App">
      <About />
      <Carousel />
      {/* <Info /> */}
      {/* <Cards /> */}
      <Team />
      {/* <Review /> */}
      <Cta />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
