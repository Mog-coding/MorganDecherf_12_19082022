/* UserModel */
export class UserModel {
    constructor(userJson) {
        if (userJson) {
            this.id = userJson.data.id;
            this.keyData = new KeyDataModel(userJson.data.keyData);
            this.todayScore = userJson.data.todayScore || userJson.data.score;
            this.userInfos = new UserInfosModel(userJson.data.userInfos);
        }
    }
}
class KeyDataModel {
    constructor(keyDataJSON) {
        this.calorieCount = keyDataJSON.calorieCount;
        this.proteinCount = keyDataJSON.proteinCount;
        this.carbohydrateCount = keyDataJSON.carbohydrateCount;
        this.lipidCount = keyDataJSON.lipidCount;
    }
}
class UserInfosModel {
    constructor(userInfoJson) {
        this.firstName = userInfoJson.firstName;
        this.lastName = userInfoJson.lastName;
        this.age = userInfoJson.age;
    }
}


/* AcivityModel */
export class ActivityModel {
    constructor(activityJSON) {
        if (activityJSON) {
            this.id = activityJSON.id;
            this.sessions = activityJSON.sessions;
        }
    }
}
