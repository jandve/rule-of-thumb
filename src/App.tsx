import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AsideTop from "./components/aside/AsideTop";
import AsideBottom from "./components/aside/AsideBottom";
import RulingCard from "./components/cards/rulingCard/RulingCard";

const test = {
  name: "Elon Musk",
  description:
    "In 2002, Musk founded SpaceX, an aerospace manufacturer and space transport services company, of which he is CEO, CTO, and lead designer.",
  category: "business",
  picture: "elon.png",
  lastUpdated: "2023-12-20T23:43:38.041Z",
  votes: {
    positive: 1237,
    negative: 894,
  },
};

function App() {
  return (
    <div className="App">
      <Header />
      <AsideTop />
      <RulingCard
        name={test.name}
        description={test.description}
        category={test.category}
        picture={test.picture}
        lastUpdated={test.lastUpdated}
        votes={test.votes}
      />
      <AsideBottom />
      <Footer />
    </div>
  );
}

export default App;
