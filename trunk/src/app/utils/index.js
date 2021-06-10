import { FIRST_DATE, LAST_DATE } from "../const";
import ConnectToDB from "../services/connectToDB";

export const parseObjectToValue = (object) => Object.values(object)[0];

export const getCountDayBeforeMoney = () => {
  const CURRENT_DATE = new Date().getDate();
  if (CURRENT_DATE > LAST_DATE && CURRENT_DATE < new Date().daysInMonth()) {
    // if CURRENT_DATE between LAST_DATE and the last day of the current month
    return new Date().daysInMonth() - CURRENT_DATE + FIRST_DATE;
  } else if (CURRENT_DATE < FIRST_DATE) {
    // if CURRENT_DATE between the first day of the current month and FIRST_DATE
    return FIRST_DATE - CURRENT_DATE;
  } else if (CURRENT_DATE > FIRST_DATE && CURRENT_DATE < LAST_DATE) {
    // if CURRENT_DATE between FIRST_DATE and LAST_DATE
    return LAST_DATE - CURRENT_DATE;
  }
};

export const getAnalytics = (moneyCount) =>
  (moneyCount / getCountDayBeforeMoney()).toFixed(1);

export const getDataFromDB = (type) => {
  return ConnectToDB.getData(type)
    .then((res) => res.json())
    .then((res) => parseObjectToValue(res));
};

export const updateDataFromDB = async (type, value) =>
  ConnectToDB.updateData(value, type).then(() => getDataFromDB(type));

export const isExpiryDay = async () => {
  const currentDay = new Date().getDate();
  const dateFromDB = await getDataFromDB("day");
  return currentDay !== dateFromDB;
};

Date.prototype.daysInMonth = function () {
  return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};
