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

export function getUserActivity(userId) {
    const path = '/activity';
    const mocked = '/mockActivity.json';

    return fetch(userId === 'mock' ? `${mocked}` : `${endPoint}${userId}${path}`)
        .then((resp) => resp.json())
        .then(({ data }) => new ActivityModel(data));
}

export function getUserSessions(userId) {
    const path = '/average-sessions';
    const mocked = '/mockAverageSession.json';

    return fetch(userId === 'mock' ? `${mocked}` : `${endPoint}${userId}${path}`)
        .then((resp) => resp.json())
        .then(({ data }) => new AverageSessionsModel(data));
}

export function getUserPerformance(userId) {
    const path = '/performance';
    const mocked = '/mockPerformance.json';

    return fetch(userId === 'mock' ? `${mocked}` : `${endPoint}${userId}${path}`)
        .then((resp) => resp.json())
        .then(({ data }) => new UserPerformance(data.data, data.kind));
}

/**
 * @description
 * @param {*} userId
 * @returns
 */
