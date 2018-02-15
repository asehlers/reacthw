import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCard from "./components";
import cards from "./cards.json";


class App extends Component {
  state ={
    cards
  };

  // componentDidMount() {
  //   this.setState({cards: cards.map(card => {card.clicked = false, card.random = Math.random()})});
  // }

  randomizeCards = () => {
    let cards = this.state.cards;
    cards = cards.map(card => {card.random = Math.random();
    return card});
    cards = cards.sort(function (a, b) {
      return a.random - b.random;
    });
    this.setState({cards});
  };

  handleClick = (event) => {
    const id = event.target.id;
    const clicked = event.target.clicked;
    const cards = this.state.cards;
    if(!clicked){
      cards[id-1].clicked = true; 
      this.setState({cards});
      this.randomizeCards();
    }
  };



  // handleInputChange = event => {
  //   // Getting the value and name of the input which triggered the change
  //   const index = parseInt(event.target.id)-1;
  //   const name = event.target.name;

  //   // Updating the input's state
  //   this.setState({
  //     [name]: value
  //   });
  // };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Memory Game!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.cards.map(card => (
        <ImageCard id={card.id} image={card.image} clicked={card.clicked} onClick={this.handleClick}/>))}
      </div>

    );
  }
}

export default App;
