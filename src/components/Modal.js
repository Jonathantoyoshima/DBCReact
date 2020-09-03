import React from "react";
import "../styles/components/modal.scss";

export default (props) => {
  return (
    <div className={"__modal"} style={{ display: props.open ? "flex" : "none" }} onClick={props.handleClose}>
      <div className='__fade' />
      <div className={"__box"}>
        <h1>{props.message.title}</h1>
        <p>{props.message.text}</p>
      </div>
    </div>
  );
};
