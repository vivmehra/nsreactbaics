import React from 'react';
import './Person.css';
const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.fname} and I am {props.age} year old
      </p>
      <input type="text" onChange={props.changed} value={props.fname} />
    </div>
  );
};

export default person;
