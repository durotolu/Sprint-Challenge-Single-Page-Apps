import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage'
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SearchForm from './components/SearchForm';
import LocationsList from './components/LocationsList';
import Axios from "axios";

const AppStyle = styled.div`
    background: grey;
    
    .nav {
      display: flex;
      justify-content: center;
      justify-content: space-evenly;
    }

    .selected {
      background-color: blue;
      /* text-decoration: none; */
    }
`

export default function App() {

  let [characterData, setCharacterData] = useState([]);
  let [searchTerm, setSearchTerm] = useState([])

  function onSubmit (e, a) {
    debugger
    // let matchingArray = characterData.filter((el) => (el.name.toLowerCase()).includes(e.name.toLowerCase()));
    // setSearchTerm(matchingArray);
    //useEffect(() => {
      let characterSearch = 'https://rickandmortyapi.com/api/character/?name=' + e.name
    Axios.get(characterSearch)
    .then((response) => {
      debugger
      setSearchTerm(response.data.results)
      a.resetForm({name: ''})
    })
    .catch((error) => {
      console.log('error')
      debugger
    })
    //}, [])
    
  }

  return (
    <AppStyle>
      <Header />
      <div className='nav'>
      <SearchForm onSubmit={onSubmit} />
      <NavLink to='/' activeClassName='selected'><span>Home</span></NavLink>
      <NavLink to='/characters/' activeClassName='selected' ><span>Characters</span></NavLink>
      <NavLink to='/location/' activeClassName='selected'><span>Location</span></NavLink>
      </div>
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters/' render={props => <CharacterList {...props} characterData={characterData} setCharacterData={setCharacterData} setSearchTerm={setSearchTerm} searchTerm={searchTerm} />} />
      <Route path='/location/' component={LocationsList} />
    </AppStyle>
  );
}
