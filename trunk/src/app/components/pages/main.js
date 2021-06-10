import React, { useState, useEffect } from "react";
import ShowMoneyValue from "../modules.js/showMoneyValue";
import ShowAnalytics from "../modules.js/showAnalytics";
import InputCosts from "../modules.js/inputCosts";
import {
  getAnalytics,
  getDataFromDB,
  updateDataFromDB,
  isExpiryDay,
} from "../../utils";
import { MONEY, BALANCE, DAY } from "../../const";

const Main = () => {
  const [moneyValue, setMoneyValue] = useState("");
  const [balance, setBalance] = useState("");

  useEffect(async () => {
    const moneyValueFromDB = await getDataFromDB(MONEY);
    setMoneyValue(moneyValueFromDB);

    if (await isExpiryDay()) {
      setBalance(getAnalytics(moneyValueFromDB));
      updateDataFromDB(DAY, new Date().getDate());
      updateDataFromDB(BALANCE, getAnalytics(moneyValueFromDB));
    } else setBalance(await getDataFromDB(BALANCE));
  }, []);

  const handleClickInput = async (value) => {
    const newBalanceValue = balance - value;
    const newMoneyValue = moneyValue - value;
    setBalance(await updateDataFromDB(BALANCE, newBalanceValue));
    setMoneyValue(await updateDataFromDB(MONEY, newMoneyValue));
  };

  return (
    moneyValue && (
      <div className="block-main">
        <ShowMoneyValue moneyValue={moneyValue} />
        <div className="block-group">
          <ShowAnalytics moneyValue={moneyValue} balance={balance} />
          <InputCosts handleClick={handleClickInput} />
        </div>
      </div>
    )
  );
};

export default Main;
