import React, { useState, useEffect, useContext } from "react";
import ShowMoneyValue from "../modules/showMoneyValue";
import ShowAnalytics from "../modules/showAnalytics";
import InputCosts from "../modules/inputCosts";
import { ThemeSwitcher } from '../modules/ThemeSwitcher'
import {
  getAnalytics,
  updateDataFromDB,
  isExpiryDay,
} from "../../utils/index";
import { ThemeContext } from "../../context";

import { prepareForWork } from '../../services/dataControl/prepareDatabase'

const Main = () => {
  const [moneyValue, setMoneyValue] = useState<number>();
  const [balance, setBalance] = useState<number>();
  const [isReady, setReadyStatus] = useState<boolean>(false)
  const { isLightTheme } = useContext(ThemeContext);

  useEffect(() => {
    const asynsGetData = async () => {
      const { money, balance, day } = await prepareForWork();

      setMoneyValue(money);
      setBalance(balance);

      if (isExpiryDay(day)) {
        setBalance(getAnalytics(money));
        updateDataFromDB("day", new Date().getDate());
        updateDataFromDB("balance", getAnalytics(money));
      }

      setReadyStatus(true)
    }
    asynsGetData()
  }, []);

  const handleClickInput = async (value: number) => {
    const newBalanceValue = balance - value;
    const newMoneyValue = moneyValue - value;
    setBalance(await updateDataFromDB("balance", parseFloat(newBalanceValue.toFixed(1))));
    setMoneyValue(await updateDataFromDB("money", parseFloat(newMoneyValue.toFixed(1))));
  };

  const divStyle = {
    backgroundColor: `${isLightTheme ? '#FFF' : '#000'}`,
    color: `${isLightTheme ? '#000' : '#fff'}`,
    transition: 'all .5s ease-in-out'
  }

  return (
    isReady ? (
      <div className="block-main" style={divStyle}>
        <ThemeSwitcher />
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
