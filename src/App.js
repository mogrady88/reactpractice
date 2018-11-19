import React, { Component } from 'react';
import './App.css';
import CardList from "../src/components/CardList";
import Form from "../src/components/Form";

class App extends Component {
  state = {
  cards: [
    {
        name: "Matt O'Grady",
        avatar_url: "https://avatars3.githubusercontent.com/u/35465181?v=4",
        company: "Georgia Tech"
    }
]
}
addNewCard = (cardinfo) => {
  this.setState(prevState => ({
        cards: prevState.cards.concat(cardinfo)
      }))
}
  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
