import React from "react";

export default function CharacterCard(props) {
  const { created, gender, name, image } = props;
  return (
    <div>
      {/* <img src={image}></img> */}
      <p>{created}</p>
      <h2>{name}</h2>
      <p>{gender}</p>
    </div>
  )
}
