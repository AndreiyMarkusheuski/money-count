import { FIRST_DATE, LAST_DATE } from "../const";
import ConnectToDB from "../services/connectToDB";

export const parseObjectToValue = (object : object) => Object.values(object)[0];

export const getCountDayBeforeMoney = () : number => {
  const CURRENT_DATE = new Date().getDate();
  if (CURRENT_DATE >= LAST_DATE && CURRENT_DATE < daysInMonth()) {
    // if CURRENT_DATE between LAST_DATE and the last day of the current month
    return daysInMonth() - CURRENT_DATE + FIRST_DATE;
  } else if (CURRENT_DATE < FIRST_DATE) {
    // if CURRENT_DATE between the first day of the current month and FIRST_DATE
    return FIRST_DATE - CURRENT_DATE;
  } else if (CURRENT_DATE >= FIRST_DATE && CURRENT_DATE < LAST_DATE) {
    // if CURRENT_DATE between FIRST_DATE and LAST_DATE
    return LAST_DATE - CURRENT_DATE;
  }
  return CURRENT_DATE
};

export const getAnalytics = (moneyCount : number) : number =>
  parseFloat((moneyCount / getCountDayBeforeMoney()).toFixed(1));

export const getDataFromDB = (type : string) : Promise<number> => {
  return ConnectToDB.getData(type)
    .then((res) => res.json())
    .then((res) => parseObjectToValue(res));
};

export const updateDataFromDB = async (type : string, value : number) : Promise<number> =>
  ConnectToDB.updateData(value, type).then(() => getDataFromDB(type));

export const isExpiryDay = async () : Promise<boolean> => {
  const currentDay = new Date().getDate();
  const dateFromDB = await getDataFromDB("day");
  return currentDay !== dateFromDB;
};

const daysInMonth = function () : number {
  return 32 - new Date(new Date().getFullYear(), new Date().getMonth(), 32).getDate();
};
