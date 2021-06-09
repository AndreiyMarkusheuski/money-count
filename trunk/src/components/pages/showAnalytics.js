import React from 'react';
import { getAnalytics, getCountDayForMoney } from "../utils";

const ShowAnalytics = (props) => (
  <div className="block-analytics">
    <h3>{getAnalytics(props.moneyCount)} руб/день</h3>
    <h4>
      на <b>{getCountDayForMoney()}</b> дней
    </h4>
  </div>
);

export default ShowAnalytics;