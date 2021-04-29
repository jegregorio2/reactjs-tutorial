import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    characters: [
      {
        name: 'Shelby',
        job: 'Programmer'
      },
      {
        name: 'Emily',
        job: 'Developer'
      },
      {
        name: 'Kelsi',
        job: 'Scientist'
      }
    ]
  }

  removeCharacter = (index) => {
    const {characters} = this.state 
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  };

  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }

  render() {
    const {characters} = this.state
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App;