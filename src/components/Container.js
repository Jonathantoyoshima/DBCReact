import React from "react";
import "../styles/components/container.scss";

export default (props) => {
  return (
    <div className='__container'>
      <div className='__frame'>{props.children}</div>
    </div>
  );
};
