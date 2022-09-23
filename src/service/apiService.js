import { UserModel } from '../models/userModel.js';
import { ActivityModel } from '../models/activityModel.js';
import { AverageSessionsModel } from '../models/averageSessionsModel.js';
import { UserPerformance } from '../models/userPerformance.js';

const endPoint = 'http://localhost:3000/user/';

export function getUserDatas(userId) {
    const mocked = '/mockUser.json';

    return fetch(userId === 'mock' ? `${mocked}` : `${endPoint}${userId}`)
        .then((resp) => resp.json())
        .then(({ data }) => new UserModel(data));
}

// export const getUserDatas = (userId) => {
//     return fetch(`http://localhost:3000/user/${userId}`)
//         .then((resp) => resp.json())
//         .then(({ data }) => new UserModel(data));
// };

export function getUserActivity(userId) {
    const fin = '/activity';
    const mocked = '/mockActivity.json';

    return fetch(userId === 'mock' ? `${mocked}` : `${endPoint}${userId}${fin}`)
        .then((resp) => resp.json())
        .then(({ data }) => new ActivityModel(data));
}

// export const getUserActivity = async (userId) => {
//     const resp = await fetch(`http://localhost:3000/user/${userId}/activity`)
//     const { data } = await resp.json();
//     return new ActivityModel(data)
// };

export function getUserSessions(userId) {
    const fin = '/average-sessions';
    const mocked = '/mockAverageSession.json';

    return fetch(userId === 'mock' ? `${mocked}` : `${endPoint}${userId}${fin}`)
        .then((resp) => resp.json())
        .then(({ data }) => new AverageSessionsModel(data));
}

// export const getUserSessions = (userId) => {
//     return fetch(`http://localhost:3000/user/${userId}/average-sessions`)
//         .then((resp) => resp.json())
//         .then(({ data }) => new AverageSessionsModel(data));
// };

export function getUserPerformance(userId) {
    const fin = '/performance';
    const mocked = '/mockPerformance.json';

    return fetch(userId === 'mock' ? `${mocked}` : `${endPoint}${userId}${fin}`)
        .then((resp) => resp.json())
        .then(({ data }) => new UserPerformance(data.data, data.kind));
}

// export const getUserPerformance = (userId) => {
//     return fetch(`http://localhost:3000/user/${userId}/performance`)
//         .then((resp) => resp.json())
//         .then(({data}) => {
//             return new UserPerformance(data.data, data.kind)});
// };

/**
 * @description
 * @param {*} userId
 * @returns
 */
