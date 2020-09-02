import React from "react";
import "../styles/components/dragonItem.scss";
export default (props) => {
  return (
    <div className={"__dragonItem"}>
      <a href='/dragon/1' className={"--name"}>
        <h2>{props.name}</h2>
      </a>
      <button>remover</button>
    </div>
  );
};
