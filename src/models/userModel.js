export class UserModel {
    constructor(userJson) {
        if (userJson) {
            this.id = userJson.data.id;
            this.keyData = userJson.data.keyData;
            this.todayScore = userJson.data.todayScore || userJson.data.score;
            this.userInfos = new UserInfoModel(userJson.data.userInfos);
        }
    }
}

class UserInfoModel {
    constructor(userInfoJson) {
        this.firstName = userInfoJson.firstName;
        this.lastName = userInfoJson.lastName;
        this.age = userInfoJson.age;
    }
}