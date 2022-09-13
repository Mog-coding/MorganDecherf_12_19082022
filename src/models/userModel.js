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
        this.calories = {
            name: 'calories',
            nb: keyDataJSON.calorieCount,
            unit: 'kCal',
            icon: '/static/media/calories-icon.5db5a3aff9bd8f441f49792782c8262e.svg'
        };
        this.proteines = {
            name: 'proteines',
            nb: keyDataJSON.proteinCount,
            unit: 'g',
            icon: '/static/media/protein-icon.c285979616f56dc9dfa457e51c583d68.svg'
        };
        this.glucides = {
            name: 'glucides',
            nb: keyDataJSON.carbohydrateCount,
            unit: 'g',
            icon: '/static/media/carbs-icon.aa0e74661df8c71ea59cbe777ac24615.svg'
        };
        this.lipides = {
            name: 'lipides',
            nb: keyDataJSON.lipidCount,
            unit: 'g',
            icon: '/static/media/fat-icon.82c6cb9fd2b3e6307fca82c2f796ed14.svg'
        };
    }
}
class UserInfosModel {
    constructor(userInfoJson) {
        this.firstName = userInfoJson.firstName;
        this.lastName = userInfoJson.lastName;
        this.age = userInfoJson.age;
    }
}