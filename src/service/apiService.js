import { UserModel } from '../models/userModel.js';
import { ActivityModel } from '../models/activityModel.js';
import { AverageSessionsModel } from '../models/averageSessionsModel.js';
import { UserPerformance } from '../models/userPerformance.js';

export const getUserDatas = (userId) => {
    return fetch(`http://localhost:3000/user/${userId}`)
        .then((resp) => resp.json())
        .then(({ data }) => new UserModel(data));
};

/**
 * @description 
 * @param {*} userId 
 * @returns 
 */
export const getUserActivity = async (userId) => {
    const resp = await fetch(`http://localhost:3000/user/${userId}/activity`)
    const { data } = await resp.json();
    return new ActivityModel(data)
};

export const getUserSessions = (userId) => {
    return fetch(`http://localhost:3000/user/${userId}/average-sessions`)
        .then((resp) => resp.json())
        .then(({ data }) => new AverageSessionsModel(data));
};

export const getUserPerformance = (userId) => {
    return fetch(`http://localhost:3000/user/${userId}/performance`)
        .then((resp) => resp.json())
        .then(({data}) => { 
            console.log("hola",data)
            return new UserPerformance(data.data, data.kind)});
};