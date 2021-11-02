import db from "../connetWithDB/fetchDB";
import {parseObjectToValue, getCountDayBeforeMoney} from '../../utils/index'

interface ICurrentData {
    [propName : string] : number
}

const setDefaultData = (key : string, data : ICurrentData) : number => {
    const updateData : ICurrentData = {
        money : data['money'],
        day : new Date().getDate(),
        balance : data['money'] / getCountDayBeforeMoney()
    }

    updateEmptyValue(key, updateData[key])
    return updateData[key]
}

const updateEmptyValue = (key : string, data : number) => db.initData(data, key)

const isAllIsOk = (data : ICurrentData) : boolean => {
    let isOK = true;
    for (let key in data) {
        if (typeof data[key] !== "number") {
            data[key] = setDefaultData(key, data)
            isOK = false
        }
    }
    return isOK;
}

const getAllData = async () => {
    return db.getAllData()
        .then(async ([money, balance, day]) => {
            const objDB = {
                money : parseObjectToValue(await money.json() || false),
                balance : parseObjectToValue(await balance.json() || false),
                day : parseObjectToValue(await day.json() || false)
            }
            return objDB
        })
}

export const prepareForWork = async () => {
    let currentData : ICurrentData = {...await getAllData()}

    if (!isAllIsOk(currentData)) prepareForWork()

    return currentData;
}