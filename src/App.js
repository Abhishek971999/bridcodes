import "./App.css";
import Team from "./components/team/team";
import Cta from "./components/cta/cta";
import Footer from "./components/footer/footer";
import Review from "./components/review/review";
import Cards from "./components/cards/cards";

function App() {
  return (
    <div className="App">
      <Cards />
      <Team />
      {/* <Review /> */}
      <Cta />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
