export class UserModel {
    constructor(userJson){
        this.id = userJson.data.id;
        this.keyData = userJson.data.keyData;
        this.todayScore = userJson.data.todayScore || userJson.data.score;
        this.userInfos = userJson.data.userInfos;
    }
}