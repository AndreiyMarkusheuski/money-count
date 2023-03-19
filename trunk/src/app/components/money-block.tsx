import React from "react";
import { getBudgetStatus } from "../utils/index";

type IShowMoneyValue = {
  moneyValue: number;
  balance: number;
};

const ShowMoneyValue = ({ moneyValue, balance }: IShowMoneyValue) => {
  return (
    <div className={`block-money ${getBudgetStatus(balance)}`}>
      <p>Текущий счет</p>
      <h2>
        <b className="block-money_high">{moneyValue}</b> руб
      </h2>
    </div>
  );
};

export default ShowMoneyValue;
