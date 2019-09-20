import React from "react";

export default function CharacterCard(props) {
  const { created, gender, name } = props;
  return (
    <div>
      <p>{created}</p>
      <p>{gender}</p>
      <p>{name}</p>
    </div>
  )
}
