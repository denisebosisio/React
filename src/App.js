import React, { Component } from "react";
import "./App.js";

class App extends Component {
  state = {
    sobre: {
      nome: "Denise",
      idade: 22,
      comidaFavorita: "Pizza de 4 queijos",
      música: ["The Climb", "Easy on Me", "Perfect"]
    }
  };

  render() {
    return (
      <div>
        <h1>Nome: {this.state.sobre.nome}</h1>
        <h2>Idade: {this.state.sobre.idade}</h2>
        <h3>Comida favorita: {this.state.sobre.comidaFavorita}</h3>
        <p>Músicas preferidas:</p>
        <ul>
          <li>{this.state.sobre.música[0]}</li>
          <li>{this.state.sobre.música[1]}</li>
          <li>{this.state.sobre.música[2]}</li>
        </ul>
      </div>
    );
  }
}
export default App;
