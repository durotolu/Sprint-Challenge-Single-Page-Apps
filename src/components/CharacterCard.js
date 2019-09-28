import React from "react";
import styled from 'styled-components';

const CardDiv = styled.div`
    img {
      height: 7em;
    }
`

export default function CharacterCard(props) {
  const { created, gender, name, image } = props;
  return (
    <CardDiv>
      <img src={image}></img>
      <p>{created}</p>
      <h2>{name}</h2>
      <p>{gender}</p>
    </CardDiv>
  )
}
