import React from "react";
import { Link } from 'react-router-dom';
import CharacterList from "./CharacterList";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      {/* <Link to ={}></Link> */}
        <header>
          <h1>Welcome to the ultimate fan site!</h1>
          <Link to={`/characters/`} ><div>Characters</div></Link>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </header>
    </section>
  );
}
