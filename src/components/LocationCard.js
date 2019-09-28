import React from "react";

export default function LocationCard({ name, type, dimension, }) {
  return <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>{dimension}</p>
          {/* <p>{residents}</p> */}
        </div>;
}
