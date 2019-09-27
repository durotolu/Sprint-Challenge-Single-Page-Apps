import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

//const characterApi = `https://rickandmortyapi.com/api/character/`;

const SectionStyle = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
`

const CharacterListStyle = styled.div`
    background: black;
    color: white;
    border: 2px solid black;
    border-radius: 35%;
    width: 17em;
    height: 9em;
    padding: 2em 0;
    margin: 2em 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    
    h2 {
      color: yellow;
    }
    div {
      text-align: center;
    }
`

export default function CharacterList({ characterData, setCharacterData }) {
  // TODO: Add useState to track data from useEffect

  //let [characterData, setCharacterData] = useState([]);

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
    <SectionStyle>
      {characterData.map((character) => <CharacterListStyle>
                                          <CharacterCard image={character.image}
                                                      created={character.created}
                                                      name={character.name}
                                                      gender={character.gender} />
                                        </CharacterListStyle>)}
    </SectionStyle>
  );
}
