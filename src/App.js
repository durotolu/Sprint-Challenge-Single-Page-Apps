import React, { useState } from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchForm from './components/SearchForm';

const AppStyle = styled.div`
    background: grey;
    
    div {
      display: flex;
      justify-content: center;
      justify-content: space-evenly;
    }
`

export default function App() {
  //const [searchTerm, setSearchTerm] = useState('');
  let [characterData, setCharacterData] = useState([]);

  function onSubmit (e) {
    const a = characterData;
    const matchingArray = characterData.filter((el) => (el.name.toLowerCase()).includes(e.name.toLowerCase()));
    setCharacterData(characterData);
    
    return (
      <div>{matchingArray.map((el) => <div>{el.name}</div>)}</div>
    )
    //(e.name)
    //setSearchTerm(e.target.value);
  }

  return (
    <AppStyle>
      <Header />
      <div>
      <SearchForm onSubmit={onSubmit} />
      <Link to ='/' ><span>Home</span></Link>
      <Link to={`/characters/`} ><span>Characters</span></Link>
      </div>
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters/' render={props => <CharacterList {...props} characterData={characterData} setCharacterData={setCharacterData} />} />
    </AppStyle>
  );
}
