import { UserModel } from '../models/userModel.js';

export const getUserDatas = (userId) => {
    return fetch(`http://localhost:3000/user/${userId}`)
        .then((resp) => resp.json())
        .then((data) => new UserModel(data));
};

export const getUserActivity = (userId) => {
    return fetch(`http://localhost:3000/user/${userId}/activity`)
        .then((resp) => resp.json())
        .then((data) => data);
};

export const getUserSessions = (userId) => {
    return fetch(`http://localhost:3000/user/${userId}/average-sessions`)
        .then((resp) => resp.json())
        .then((data) => data);
};

export const getUserPerformance = (userId) => {
    return fetch(`http://localhost:3000/user/${userId}/performance`)
        .then((resp) => resp.json())
        .then((data) => data);
};