export class ActivityModel {
    constructor(activityJSON) {
        if (activityJSON) {
            this.id = activityJSON.userId;
            this.sessions = new Sessions(activityJSON.sessions);
        }
    }
}

class Sessions {
    constructor(sessionsJSON) {
        this.sessions = sessionsJSON.map((sessionEl) => {
            return {
                day: new Date(sessionEl.day).getDate(),
                calories: sessionEl.calories,
                kilogram: sessionEl.kilogram,
            };
        })
    }
}
