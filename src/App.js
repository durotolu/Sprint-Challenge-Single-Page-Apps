import React, { useState } from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage'
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SearchForm from './components/SearchForm';


export default function App() {

  let [characterData, setCharacterData] = useState([]);

  return (
    <main>
      <Header />
      <SearchForm />
      <NavLink to='/' activeClassName='selected'>Home</NavLink>
      <NavLink to={`/characters/`} activeClassName='selected' >Characters</NavLink>
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters/' render={props => <CharacterList {...props} characterData={characterData} setCharacterData={setCharacterData} />} />
    </main>
  );
}
