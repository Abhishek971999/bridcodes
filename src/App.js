import "./App.css";
import Team from "./components/team/team.jsx";
import Cta from "./components/cta/cta.jsx";
import Footer from "./components/footer/footer.jsx";
import Review from "./components/review/review.jsx";
import Cards from "./components/cards/cards.jsx";
import Info from "./components/info/info.jsx";
import Carousel from "./components/carousel/carousel.jsx";
import About from "./components/about/about.jsx";
import Hero from "./components/hero/hero.jsx";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Carousel />
      <Info />
      <Cards />
      <Team />
      <Review />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
