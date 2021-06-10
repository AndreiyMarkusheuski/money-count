import React, {useState, useEffect} from 'react';
import {parseObjectToValue, getCountDayForMoney} from '../../app/utils/index'

const ShowMoneyCount = (props) => {
    return (
      <div className="block-money">
        <p>Текущий счет</p>
        <h2>
          <b className="block-money_high">{props.moneyCount}</b> руб
        </h2>
      </div>
    );
}

export default ShowMoneyCount