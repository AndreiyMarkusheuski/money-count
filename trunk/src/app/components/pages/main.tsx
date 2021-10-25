import React, { useState, useEffect } from "react";
import ShowMoneyValue from "../modules/showMoneyValue";
import ShowAnalytics from "../modules/showAnalytics";
import InputCosts from "../modules/inputCosts";
import {
  getAnalytics,
  getDataFromDB,
  updateDataFromDB,
  isExpiryDay,
} from "../../utils/index";
import { MONEY, BALANCE, DAY } from "../../const/index";

const Main = () => {
  const [moneyValue, setMoneyValue] = useState<number>();
  const [balance, setBalance] = useState<number>();

  useEffect(() => {
    const asynsGetData = async () => {
      const moneyValueFromDB : number = await getDataFromDB(MONEY);
      
      setMoneyValue(moneyValueFromDB);
  
      if (await isExpiryDay()) {
        setBalance(getAnalytics(moneyValueFromDB));
        updateDataFromDB(DAY, new Date().getDate());
        updateDataFromDB(BALANCE, getAnalytics(moneyValueFromDB));
      } else setBalance(await getDataFromDB(BALANCE));
    }

    asynsGetData()
  }, []);

  const handleClickInput = async (value : number) => {
    const newBalanceValue = balance - value;
    const newMoneyValue = moneyValue - value;
    setBalance(await updateDataFromDB(BALANCE, parseFloat(newBalanceValue.toFixed(1))));
    setMoneyValue(await updateDataFromDB(MONEY, parseFloat(newMoneyValue.toFixed(1))));
  };

  return (
    moneyValue ? (
      <div className="block-main">text
        <ShowMoneyValue moneyValue={moneyValue} />
        <div className="block-group">
          <ShowAnalytics moneyValue={moneyValue} balance={balance} />
          <InputCosts handleClick={handleClickInput} />
        </div>
      </div>
    ) : (
      <div>Loading...</div>
    )
  );
};

export default Main;
