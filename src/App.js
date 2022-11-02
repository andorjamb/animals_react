
import './App.css';
import { animals } from './animals';
import Card from './Card';
import Header from './Header';
import { Component } from 'react';

class App extends Component {
  state = {
    animals: animals,
  };





  addLikeHandler = (name) => {
    this.setState((state) => {
      const updatedArray = state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 }
        }
        else { return animal }
      })

    }
    )
  };


  removeCard = (name) => {
    const updatedArray = this.state.animals.filter((animal) => animal.name !== name);
    this.setState({ animals: updatedArray });
  }

  animalsList = this.state.animals.map((animal) => (<Card key={animal.name} name={animal.name} likes={animal.likes} removeCard={this.removeCard(animal.name)} addLikeHandler={this.addLikeHandler(animal.name)} />))

  render() {
    return (

      <div className="App">
        <Header />
        <div className="mainContainer">{this.animalsList}

        </div></div>)
  }



}

export default App;
