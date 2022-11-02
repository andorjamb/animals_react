
import './App.css';
import { animals } from './animals';
import Card from './Card';
import Header from './Header';
import { Component } from 'react';

class App extends Component {
  state = {
    animals: animals,
  };


  render() {
    return (

      <div className="App">
        <Header />
        <div className="mainContainer">
          {animals.map((animal) => <Card key={animal.name} name={animal.name} likes={animal.likes} />)}
        </div></div>)
  }

}

export default App;
