import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Items, Pokemon, Pokemons } from "./pages";

function App() {
  return (
    <Router>
      <div className="pp">
        <Routes>
          <Route path="/pokemons/:name" element={<Pokemon />}/>
          <Route path="/pokemons" element={<Pokemons />}/>
          <Route path="/items" element={<Items />}/>
          <Route path="/" element={<Pokemons />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
