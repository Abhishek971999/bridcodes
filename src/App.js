import "./App.css";
import Team from "./components/team/team";
import Cta from "./components/cta/cta";
import Footer from "./components/footer/footer";
import Review from "./components/review/review";

function App() {
  return (
    <div className="App">
      <Team />
      <Review />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
