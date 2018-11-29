import React from 'react';
import './Numbers.css';

const Numbers = props => {
  const numberClassName = number => {
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return 'selected';
    }
    if (props.usedNumbers.indexOf(number) >= 0) {
      return 'used';
    }
  };

  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number, i) => 
          <span
            key={i}
            className={numberClassName(number)}
            onClick={() => props.selectNumber(number)}
          >
            {number}
          </span>
        )}
      </div>
    </div>
  );
};

Numbers.list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default Numbers;
