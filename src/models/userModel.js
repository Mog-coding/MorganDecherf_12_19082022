export class UserModel {
    constructor(userJson) {
        if (userJson) {
            this.id = userJson.id;
            this.keyData = new KeyDataModel(userJson.keyData);
            this.todayScore = userJson.todayScore || userJson.score;
            this.userInfos = new UserInfosModel(userJson.userInfos);
        }
    }
}
class KeyDataModel {
    constructor(keyDataJSON) {
        this.calories = keyDataJSON.calorieCount;
        this.proteines = keyDataJSON.proteinCount;
        this.glucides = keyDataJSON.carbohydrateCount;
        this.lipides = keyDataJSON.lipidCount;
    }
}
class UserInfosModel {
    constructor(userInfoJson) {
        this.firstName = userInfoJson.firstName;
        this.lastName = userInfoJson.lastName;
        this.age = userInfoJson.age;
    }
}