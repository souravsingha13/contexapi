import React from 'react';
import './App.css';
import MoviesList from './MoviesList';
import Nav from './Nav';
import { MovieProvider } from './MovieContext';
import TestSchedule from "./NodeCron";
import AddMovie from './AddMovie';


export default class App extends React.Component {

  render(){
    return (
      <MovieProvider>
          <div className="App">
            <Nav/>
            <AddMovie/>
            <MoviesList/>
            <TestSchedule/>
          </div>
      </MovieProvider>
    );
  }
}

