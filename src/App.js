import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCard from "./components";
import startCards from "./cards.json";


class App extends Component {
  state ={
    cards: startCards,
    score: 0,
    highScore: 0
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
    let cards = this.state.cards;
    let index = 0;
    for(let i = 0; i < cards.length; i++){
      if(cards[i].id === id){
        index = i;
      }
    }
    console.log("clicked", event.target);
    
    if(!cards[index].clicked){
      cards[index].clicked = true; 
      const score = this.state.score + 1;
      this.setState({cards, score});
      this.randomizeCards();
    } else {
      const score = 0;
      let highScore = this.state.highScore;
      if(this.state.highScore < this.state.score){
        highScore = this.state.score;
      }
      cards = startCards.map(card => {card.random = Math.random();
        card.clicked = false;
        return card});
      this.setState({score, highScore, cards});
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Memory Game!</h1>
        </header>
        <p className="App-intro">
          Your current Score is {this.state.score}   || Your high Score is {this.state.highScore}
        </p>
        {this.state.cards.map(card => (
        <ImageCard id={card.id} image={card.image} clicked={card.clicked} onClick={this.handleClick}/>))}
      </div>

    );
  }
}

export default App;
