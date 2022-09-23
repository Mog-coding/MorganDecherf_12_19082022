import { UserModel } from '../models/userModel.js';
import { ActivityModel } from '../models/activityModel.js';
import { AverageSessionsModel } from '../models/averageSessionsModel.js';
import { UserPerformance } from '../models/userPerformance.js';
import { checkPropTypes } from 'prop-types';

const endPoint = 'http://localhost:3000/user/';

export async function getUserSessions(userId) {
    const path = '/average-sessions';
    const mocked = '/mockAverageSession.json';

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

export async function getUserDatas(userId) {
    const mocked = '/mockUser.json';

    const resp = await fetch(
        userId === 'mock' ? `${mocked}` : `${endPoint}${userId}`
    );
    const { data } = await resp.json();
    return new UserModel(data);
}

export async function getUserActivity(userId) {
    const path = '/activity';
    const mocked = '/mockActivity.json';

    const resp = await fetch(
        userId === 'mock' ? `${mocked}` : `${endPoint}${userId}${path}`
    );
    const { data } = await resp.json();
    return new ActivityModel(data);
}

export async function getUserPerformance(userId) {
    const path = '/performance';
    const mocked = '/mockPerformance.json';

    const resp = await fetch(
        userId === 'mock' ? `${mocked}` : `${endPoint}${userId}${path}`
    );
    const { data } = await resp.json();
    return new UserPerformance(data.data, data.kind);
}

/**
 * @description
 * @param {*} userId
 * @returns
 */
