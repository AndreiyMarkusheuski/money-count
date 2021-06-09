import { FIRST_DATE, LAST_DATE } from "../const";

export const parseObjectToValue = (object) => Object.values(object)[0];

export const getCountDayForMoney = () => {
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

export const getAnalytics = (moneyCount) => (moneyCount / getCountDayForMoney()).toFixed(1)

Date.prototype.daysInMonth = function () {
  return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};
