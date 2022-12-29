
import './App.css';
import { animals, birds } from './animalsbirds';
import { Component } from 'react';
import { Route, Routes, } from 'react-router-dom';
import NavBar from './NavBar';
import About from './About';
import Animals from './Animals';
import Birds from './Birds';
import Home from './Home';
import Searchbar from './Searchbar';
import NotFound from './NotFound.js';

class App extends Component {
  state = {
    animals: animals,
    birds: birds,
    search: '',
  };

  animalAddLikeHandler = (name) => {
    this.setState((animals) => {
      const updatedAnimals = this.state.animals.map((animal) => {
        if (animal.name === name) {
          return { ...animals, likes: animal.likes + 1 }
        }
        else { return animal }
      })
      this.setState({ animals: updatedAnimals });
    }
    )
  };

  birdAddLikeHandler = (name) => {
    this.setState((birds) => {
      const updatedBirds = this.state.birds.map((bird) => {
        if (bird.name === name) {
          return { ...birds, likes: bird.likes + 1 }
        }
        else { return bird }
      })
      this.setState({ birds: updatedBirds });
    }
    )
  };


  animalRemoveLikeHandler = (name) => {
    this.setState((animals) => {
      const updatedAnimals = this.state.animals.map((animal) => {
        if (animal.name === name.toLowerCase()) {
          if (animal.likes === 0) {
            return { ...animal, likes: 0 }
          }
          else { return { ...animals, likes: animal.likes - 1 } }
        }
        else { return animal }
      })
      this.setState({ animals: updatedAnimals });
    })
  }

  birdRemoveLikeHandler = (name) => {
    this.setState((birds) => {
      const updatedBirds = this.state.birds.map((bird) => {
        if (bird.name === name.toLowerCase()) {
          if (bird.likes === 0) {
            return { ...bird, likes: 0 }
          }
          else { return { ...birds, likes: bird.likes - 1 } }
        }
        else { return bird }
      })
      this.setState({ birds: updatedBirds });
    })
  }



  animalRemoveHandler = (name) => {
    const updatedAnimals = this.state.animals.filter((animal) => animal.name !== name.toLowerCase());
    this.setState({ animals: updatedAnimals });
  }

  birdRemoveHandler = (name) => {
    const updatedBirds = this.state.birds.filter((bird) => bird.name !== name.toLowerCase());
    this.setState({ birds: updatedBirds });
  }


  searchHandler = (e) => {
    this.setState({ search: e.target.value.toLowerCase() });
  }

  render() {


    return (
      <div className="App" >

        <NavBar />
        <div className="main-content-container">
          <Searchbar onChange={this.searchHandler} />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/animals" element={<Animals
              animals={this.state.animals}
              search={this.state.search}
              searchHandler={this.state.searchHandler}
              animalRemoveHandler={this.state.animalRemoveHandler}
              animaladdLikeHandler={this.state.animalAddLikeHandler}
              animalRemoveLikeHandler={this.state.animalRemoveLikeHandler}
            />}></Route>
            
            <Route path="/birds" element={<Birds
              birds={this.state.birds}
              search={this.state.search}
              searchHandler={this.state.searchHandler}
              birdRemoveHandler={this.state.birdRemoveHandler}
              birdAddLikeHandler={this.state.birdAddLikeHandler}
              birdRemoveLikeHandler={this.state.birdRemoveLikeHandler} />}>
            </Route>


          </Routes>
        </div>
      </div>
    )
  }

}

export default App;


/*  
          
           
               
               */

/*
              
              <Route path="/about" element={<About />}></Route>
              <Route path="*" element={<NotFound />}></Route> */
