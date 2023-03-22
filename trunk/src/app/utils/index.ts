import { FIRST_DATE, LAST_DATE, BUDGET_STATUS } from "../constants";
import ConnectToDB from "../services/connetWithDB/fetchDB";

export const parseObjectToValue = (object: object) => Object.values(object)[0];

export const getCountDayBeforeMoney = (): number => {
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
  return CURRENT_DATE;
};

export const getAnalytics = (moneyCount: number): number =>
  parseFloat((moneyCount / getCountDayBeforeMoney()).toFixed(1));

export const getDataFromDB = (type: string): Promise<number> => {
  return ConnectToDB.getData(type)
    .then((res) => res.json())
    .then((res) => parseObjectToValue(res));
};

export const updateDataFromDB = async (
  type: string,
  value: number
): Promise<number> =>
  ConnectToDB.updateData(value, type).then(() => getDataFromDB(type));

export const isExpiryDay = (dayFromDB: number): boolean =>
  new Date().getDate() !== dayFromDB;

const daysInMonth = function (): number {
  return (
    32 - new Date(new Date().getFullYear(), new Date().getMonth(), 32).getDate()
  );
};

export const getBudgetStatus = (budget: number): string => {
  const budgetAnalytics: number = getAnalytics(budget);
  if (budgetAnalytics > 20) return BUDGET_STATUS.perfect;
  if (budgetAnalytics < 10) return BUDGET_STATUS.critical;
  return BUDGET_STATUS.normal;
};
