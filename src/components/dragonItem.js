import React from "react";
import "../styles/components/dragonItem.scss";
export default (props) => {
  return (
    <div className={"__dragonItem"}>
      <a href={`/dragon/${props.id}`} className={"--name"}>
        <strong>{props.name}</strong>
      </a>
      <button onClick={() => props.remove(props.id)}>remover</button>
    </div>
  );
};
