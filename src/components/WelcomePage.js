import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WelcomePageStyle = styled.div`
    text-align: center;
    flex-flow: wrap;
    justify-content: space-around;

    .main-img {
      display: inline-block;
    }
`

export default function WelcomePage() {
  return (
    <WelcomePageStyle>
        <header>
          <h1>Welcome to the ultimate fan site!</h1>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </header>
    </WelcomePageStyle>
  );
}
