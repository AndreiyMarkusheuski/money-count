import React, { useState, useEffect } from "react";
import ConnectToDB from "../services/connectToDB";
import ShowMoneyCount from "./showMoneyCount";
import ShowAnalytics from "./showAnalytics";
import InputCosts from "./inputCosts";
import { parseObjectToValue } from "../utils";

const App = () => {
  const [moneyCount, setMoneyCount] = useState("");
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    ConnectToDB.getMoneyCount()
      .then((res) => res.json())
      .then((res) => setMoneyCount(parseObjectToValue(res)));
  }

  const updateData = (newValue) => {
    ConnectToDB.updateMoneyCount(newValue).then(() =>getData())
    // setTimeout(() => {
      
    // }, 1000);
  };
  
  return (
    moneyCount && (
      <div className='block-main'>
        <ShowMoneyCount moneyCount={moneyCount} />
        <div className='block-group'>
          <ShowAnalytics moneyCount={moneyCount} />
          <InputCosts updateData={updateData} moneyCount={moneyCount} />
        </div>
      </div>
    )
  );
};

export default App;
