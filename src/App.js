import React from 'react';
import './App.css';
import SearchForm from './SearchForm';
import Search from './Search';
import MainNav from './MainNav';
import PhotoContainer from './PhotoContainer';
import apiKey from './config';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

class App extends React.Component {

  state = {
    photos1: [],
    photos2: [],
    photos3: [],
    photos4: [],
    loading: true
  }

  componentDidMount(){
    this.findPhotos('cats', 'photos1');
    this.findPhotos('dogs', 'photos2');
    this.findPhotos('computers', 'photos3');
  }

  findPhotos = (tags, property) => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => response.json())
    .then(responseData => {
        this.setState({[property]: responseData.photos.photo, loading: false});
    })
    .catch( error => {
        console.log('Error fetching and parsing the data', error);
    });
  }

  testFunction = (text) => {
    console.log(`PASSING ${text} from the child to the parent!`);
  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <SearchForm />
          <MainNav />
          <Switch>
            <Route path="/cats" render={ () => <PhotoContainer photos={this.state.photos1}/>} />
            <Route path="/dogs" render={ () => <PhotoContainer photos={this.state.photos2}/>} />
            <Route path="/computers" render={ () => <PhotoContainer photos={this.state.photos3}/>} />
            <Route exact path="/:topic" component={Search} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
