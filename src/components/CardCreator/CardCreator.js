import React from 'react';
import Form from '../Form';
import CardList from '../CardList';

class CardCreator extends React.Component {
  state = {
    cards: [
      {
        name: "Matt O'Grady",
        avatar_url: 'https://avatars3.githubusercontent.com/u/35465181?v=4',
        company: 'Georgia Tech'
      }
    ]
  };

  addNewCard = cardinfo => {
    this.setState(prevState => ({
      cards: prevState.cards.concat(cardinfo)
    }));
  };

  render() {
    return (
      <div className="container">
        <Form />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default CardCreator;
