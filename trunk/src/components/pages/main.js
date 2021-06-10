import React, { useState, useEffect } from "react";
import ConnectToDB from "../../services/connectToDB";
import ShowMoneyCount from "../modules.js/showMoneyCount";
import ShowAnalytics from "../modules.js/showAnalytics";
import InputCosts from "../modules.js/inputCosts";
import { parseObjectToValue, getAnalytics } from "../../app/utils";
import { MONEY, BALANCE } from "../const";

const Main = () => {
  const [moneyCount, setMoneyCount] = useState("");
  const [balance, setBalance] = useState("");

  useEffect(async () => {
    setMoneyCount(await getDataFromDB(MONEY));
    setBalance(await getDataFromDB(BALANCE));
  }, []);

  const getDataFromDB = (type) => {
    return ConnectToDB.getData(type)
      .then((res) => res.json())
      .then((res) => parseObjectToValue(res));
  };

  const updateData = (newValue) => {
    const newBalace = balance - newValue;
    const newMoneyCount = moneyCount - newValue;
    ConnectToDB.updateData(newMoneyCount, MONEY).then(async () =>
      setMoneyCount(await getDataFromDB(MONEY))
    );
    ConnectToDB.updateData(newBalace, BALANCE).then(async () =>
      setBalance(await getDataFromDB(BALANCE))
    );
  };

  return (
    moneyCount && (
      <div className="block-main">
        <ShowMoneyCount moneyCount={moneyCount} />
        <div className="block-group">
          <ShowAnalytics moneyCount={moneyCount} balance={balance} />
          <InputCosts updateData={updateData}/>
        </div>
      </div>
    )
  );
};

export default Main;
