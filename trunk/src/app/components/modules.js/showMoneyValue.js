import React from 'react';

const ShowMoneyValue = (props) => {
  return (
    <div className="block-money">
      <p>Текущий счет</p>
      <h2>
        <b className="block-money_high">{props.moneyValue}</b> руб
      </h2>
    </div>
  );
};

export default ShowMoneyValue;