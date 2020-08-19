import React from "react";
import "./App.scss";
import { CatFood } from "../components/CatFood/CatFood";

function App() {
  return (
    <main>
      <div className="app">
        <div className="app-wrapper">
          <CatFood />
        </div>
      </div>
    </main>
  );
}

export default App;
