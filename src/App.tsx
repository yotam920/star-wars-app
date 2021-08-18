import axios from 'axios';
import React, { Component } from 'react';
import { couldStartTrivia } from 'typescript';
import { fetchData } from './api';
import TableOfContent from './Components/tableOfContent';

interface props{

}

interface states{
  films: any;
}


export default class App extends React.Component<props,states>{

  constructor(props : props) {
    super(props);

    this.state = {
        films : []
    }

  }
  
  fetchData = async () => {
    console.log("in fetch data")
    const starWarsApi = "https://swapi.dev/api/films/";
    await axios.get(`${starWarsApi}`).
    then((response) => {
      const fetchedFilms = response.data.results;
      console.log("fetching...");
      this.setState({
        films : fetchedFilms,
      })
    })
    .catch((error) => {
      console.log("Error");
    })
    .then(()=> console.log("second then"))
  }

  poty = () => {
    console.log(this.state.films)
  }

  componentDidMount(){
    this.fetchData();
    console.log("hey")
    
  }

  render(){
    return <TableOfContent films={this.state.films}></TableOfContent>
  }
}
