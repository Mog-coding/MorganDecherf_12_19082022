import { UserModel } from '../models/userModel.js';
import { ActivityModel } from '../models/activityModel.js';
import { AverageSessionsModel } from '../models/averageSessionsModel.js';
import { UserPerformance } from '../models/userPerformance.js';

const endPoint = 'http://localhost:3000/user/';
const mocked = 'http://localhost:3001/dataMock.json';

/**
 * @description get user's activity data with id from back-end or from local json mocked
 * @param {string} userId 
 * @returns {@link ActivityModel}
 */
export async function getUserActivity(userId) {
    const path = 'activity'

    // if data mocked or if data from back-end
    if (userId === 'mock') {
        const dataJS = await getData(userId, path)
        return new ActivityModel(dataJS['activity']['data'])
    } else {
        const dataJS = await getData(userId, path)
        return new ActivityModel(dataJS.data)
    }
}

/**
 * @description get user's average sessions data with id from back-end or from local json mocked
 * @param {string} userId 
 * @returns {@link AverageSessionsModel}
 */
export async function getUserSessions(userId) {
    const path = 'average-sessions';

    if (userId === 'mock') {
        const dataJS = await getData(userId, path)
        return new AverageSessionsModel(dataJS['averageSessions']['data'])
    } else {
        const dataJS = await getData(userId, path)
        return new AverageSessionsModel(dataJS.data)
    }
}

/**
 * @description get user's performance data with id from back-end or from local json mocked
 * @param {string} userId 
 * @returns {@link UserPerformance}
 */
export async function getUserPerformance(userId) {
    const path = 'performance';

    if (userId === 'mock') {
        const dataJS = await getData(userId, path)
        return new UserPerformance(dataJS['performance']['data'])
    } else {
        const dataJS = await getData(userId, path)
        return new UserPerformance(dataJS.data)
    }
}

/**
 * @description get user data with id from back-end or from local json mocked
 * @param {string} userId 
 * @returns {@link UserModel}
 */
export async function getUserDatas(userId) {

    const dataJS = await getData(userId)
    return new UserModel(dataJS.data);
}

/**
 * @description execute fetch with userId and path, and handle error
 * @param {string} userId 
 * @returns {object}
 */
async function getData(userId, path) {
    try {
        const resp = await fetch(
            userId === 'mock' ? `${mocked}` : `${endPoint}${userId}/${path || ""}`
        )
        if (resp.ok) {
            return await resp.json();
        } else {
            throw new Error(resp.status)
        }
    } catch (err) {
        console.error(err)
    }
}