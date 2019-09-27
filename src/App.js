import React, { useState } from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage'
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SearchForm from './components/SearchForm';

const AppStyle = styled.div`
    background: grey;
    
    div {
      display: flex;
      justify-content: center;
      justify-content: space-evenly;
    }

    .selected {
      background-color: blue;
      text-decoration: none;
    }
`

export default function App() {

  let [characterData, setCharacterData] = useState([]);

  return (
    <AppStyle>
      <Header />
      <div>
      <SearchForm />
      <NavLink to='/' activeClassName='selected'><span>Home</span></NavLink>
      <NavLink to={`/characters/`} activeClassName='selected' ><span>Characters</span></NavLink>
      </div>
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters/' render={props => <CharacterList {...props} characterData={characterData} setCharacterData={setCharacterData} />} />
    </AppStyle>
  );
}
