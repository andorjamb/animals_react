
import './App.css';
import { animals } from './animals';
import Card from './Card';
import Header from './Header';
import { Component } from 'react';

class App extends Component {
  state = {
    animals: animals,
    number: animals.length,
    search: '',

  };

  addLikeHandler = (name) => {
    this.setState((state) => {
      const updatedArray = this.state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animal, likes: animal.likes + 1 }
        }
        else { return animal }
      })

      this.setState({ animals: updatedArray });
    }
    )
  };

  removeLikeHandler = (name) => {
    this.setState((state) => {
      const updatedArray = this.state.animals.map((animal) => {
        if (animal.name === name) {
          if (animal.likes === 0) {
            return { ...animal, likes: 0 }
          }
          else { return { ...animal, likes: animal.likes - 1 } }
        }
        else { return animal }
      })
      this.setState({ animals: updatedArray });
    })
  }
  removeHandler = (name) => {
    const updatedArray = this.state.animals.filter((animal) => animal.name !== name);
    this.setState({ animals: updatedArray });
  }

  searchHandler = (e) => {
    this.setState({ search: e.target.value.toLowerCase() });
  }

  render() {
    const animalFilter = this.state.animals.filter(animal => { return animal.name.includes(this.state.search); })
    /**make a new array only containing what has been set in the search field */

    const animalsList = animalFilter.map((animal) => {
      return (
        <Card
          key={animal.name}
          name={animal.name.charAt(0).toUpperCase() + animal.name.substring(1)}
          likes={animal.likes}
          removeCard={() => this.removeHandler(animal.name)}
          addLikes={() => this.addLikeHandler(animal.name)}
          removeLikes={() => this.removeLikeHandler(animal.name)}
        />);
    });

    return (
      <div className="App" >
        <Header
          number={this.state.animals.length}
          click={() => this.setState({ animals: animals })}
        />
        <div className="searchBar"><input onChange={this.searchHandler}></input></div>
        <div className="mainContainer">

          {animalsList}

        </div></div>)
  }

}

export default App;
