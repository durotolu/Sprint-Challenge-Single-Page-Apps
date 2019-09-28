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
  let [searchTerm, setSearchTerm] = useState([])

  function onSubmit (e, a) {
    //setCharacterData(characterData);
    console.log(characterData);
    debugger
    let matchingArray = characterData.filter((el) => (el.name.toLowerCase()).includes(e.name.toLowerCase()));
    setSearchTerm(matchingArray);
    //a.resetForm(characterData)
    
    //let characterData = setCharacterData(characterData);
    
    //a.setValues(setCharacterData(characterData));
    // return (
    //   <div>{matchingArray.map((el) => <div>{el.name}</div>)}</div>
    // )
    //setCharacterData(characterData);
    //(e.name)
    //setSearchTerm(e.target.value);
  }

  return (
    <AppStyle>
      <Header />
      <div>
      <SearchForm onSubmit={onSubmit} />
      <NavLink to='/' activeClassName='selected'><span>Home</span></NavLink>
      <NavLink to={`/characters/`} activeClassName='selected' ><span>Characters</span></NavLink>
      </div>
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters/' render={props => <CharacterList {...props} characterData={characterData} setCharacterData={setCharacterData} setSearchTerm={setSearchTerm} searchTerm={searchTerm} />} />
    </AppStyle>
  );
}
