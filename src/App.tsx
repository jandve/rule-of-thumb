import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AsideTop from "./components/aside/AsideTop";
import AsideBottom from "./components/aside/AsideBottom";
import PreviousRulers from "./components/previousRuler/PreviousRulers";
import { PreviousRulerProvider } from "./components/previousRuler/PreviousRulerProvider";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ maxWidth: "1100px", margin: "auto" }}>
        <AsideTop />
        <PreviousRulerProvider>
          <PreviousRulers />
        </PreviousRulerProvider>
        <AsideBottom />
        <Footer />
      </div>
    </div>
  );
}

export default App;
