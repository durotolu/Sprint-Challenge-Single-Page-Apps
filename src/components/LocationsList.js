import React, { useEffect, useState } from "react";
import Axios from 'axios';
import LocationCard from './LocationCard';
import styled from 'styled-components';

const locationApi = `https://rickandmortyapi.com/api/location/`

const SectionStyle = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;

    div {
        border: 2px solid black;
        background: black;
        color: white;
        border-radius: 35%;
        width: 15em;
        height: 8em;
        text-align: center;
        margin: 2em 0;
    }
`

const LocationsListStyle = styled.div`
    
    border: 2px solid black;
    
    
    padding: 2em 0;
    
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    
    h2 {
      color: yellow;
    }
    div {
      text-align: center;
    }
`

export default function LocationsList() {

    let [locationData, setLocationData] = useState([]);

    useEffect(() => {
        Axios.get(locationApi)
  .then((response) => {
      debugger
    setLocationData(response.data.results)
    console.log(locationData);
  })
  .catch((error) => {
    //error.message
    console.log('error')
  })
    }, [])

    console.log(locationData);

  return (
    <SectionStyle>
    {locationData.map((location) => <div><LocationCard name={location.name}
                                                     type={location.type}
                                                     dimension={location.dimension}
                                                     residents={location.residents} /></div>)}
  </SectionStyle>
  )
}
