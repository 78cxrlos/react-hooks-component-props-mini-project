import React from "react";

export default function Aside(props) {
  return (
    <div>
      <img src={props.image} alt="blog logo"></img>
      <p>{props.about}</p>
    </div>
  );
}

