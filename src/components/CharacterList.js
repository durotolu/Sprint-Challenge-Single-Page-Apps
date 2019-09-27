import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from './CharacterCard'

//const characterApi = `https://rickandmortyapi.com/api/character/`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  let [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get(characterApi)
    .then((response) => {
      debugger
      setCharacterData(response.data.results)
    })
    .catch((error) => {
      debugger
    })
  }, []);

  return (
    <section className="character-list">
      {characterData.map((character) => <div>
                                          <CharacterCard created={character.created}
                                                      name={character.name}
                                                      gender={character.gender} />
                                        </div>)}
    </section>
  );
}
