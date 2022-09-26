import { UserModel } from '../models/userModel.js';
import { ActivityModel } from '../models/activityModel.js';
import { AverageSessionsModel } from '../models/averageSessionsModel.js';
import { UserPerformance } from '../models/userPerformance.js';

const endPoint = 'http://localhost:3000/user/';

/**
 * @description get user sessions data with url param userId
 * @param {string} userId 
 * @returns {object}
 */

export async function getUserSessions(userId) {
    const path = '/average-sessions';
    const mocked = 'http://localhost:3001/mockAverageSession.json';

    try {
        const resp = await fetch(
            userId === 'mock' ? `${mocked}` : `${endPoint}${userId}${path}`
        );

        if (resp.ok) {
            const { data } = await resp.json();
            return new AverageSessionsModel(data);
        } else {
            throw new Error(resp.status);
        }
    } catch (err) {
        console.log(err);
    }
}

/**
 * @description get user data with url param userId
 * @param {string} userId 
 * @returns {object}
 */

export async function getUserDatas(userId) {
    const mocked = 'http://localhost:3001/mockUser.json';

    const resp = await fetch(
        userId === 'mock' ? `${mocked}` : `${endPoint}${userId}`
    );
    const { data } = await resp.json();
    return new UserModel(data);
}

/**
 * @description get user activity data with url param userId
 * @param {string} userId 
 * @returns {object}
 */

export async function getUserActivity(userId) {
    const path = '/activity';
    const mocked = 'http://localhost:3001/mockActivity.json';

    const resp = await fetch(
        userId === 'mock' ? `${mocked}` : `${endPoint}${userId}${path}`
    );
    const { data } = await resp.json();
    return new ActivityModel(data);
}

/**
 * @description get user performance data with url param userId
 * @param {string} userId 
 * @returns {object}
 */

export async function getUserPerformance(userId) {
    const path = '/performance';
    const mocked = 'http://localhost:3001/mockPerformance.json';

    const resp = await fetch(
        userId === 'mock' ? `${mocked}` : `${endPoint}${userId}${path}`
    );
    const { data } = await resp.json();
    return new UserPerformance(data.data, data.kind);
}