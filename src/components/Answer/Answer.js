import React from 'react';
import './Answer.css';

const Answer = props => {
  return (
    <div className="col-5">
      {props.selectedNumbers.map((number, i) => 
        <span key={i} onClick={() => props.removeNumber(number)}>
          {number}
        </span>
      )}
    </div>
  );
};

export default Answer;
