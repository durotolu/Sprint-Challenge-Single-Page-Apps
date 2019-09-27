import React, { useEffect, useState } from "react";
import Axios from "axios";

//const characterApi = `https://rickandmortyapi.com/api/character/`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  let [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get(characterApi)
    .then((response) => {
      setCharacterData(response.data.results)
    })
    .catch((error) => {
      debugger
    })
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
