import React from "react";

export default function CharacterCard(props) {
  const { created, gender, name } = props;
  return (
    <div>
      <p>{created}</p>
      <h2>{name}</h2>
      <p>{gender}</p>
    </div>
  )
}
