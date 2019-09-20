import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const AppStyle = styled.div`
    background: grey;
    
    div {
      text-align: center;
    }
`

export default function App() {

  return (
    <AppStyle>
      <Header />
      <Link to={`/characters/`} ><div>Characters</div></Link>
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters/' render={props => <CharacterList {...props} />} />
    </AppStyle>
  );
}
