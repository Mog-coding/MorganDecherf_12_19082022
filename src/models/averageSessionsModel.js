export class AverageSessionsModel {
    constructor(sessionsJSON) {
        if (sessionsJSON) {
            this.userId = sessionsJSON.userId;
            this.sessions = new AverageSessions(sessionsJSON.sessions);
        }
    }
}

class AverageSessions {
    constructor(averageJSON) {
        console.log(averageJSON)
        this.sessions = averageJSON.map((el) => {
            return {
                day: numberIntoDay(el.day),
                sessionLength: el.sessionLength
            }
        })
    }
}

const numberIntoDay = (para) => {
    if( para === 1) return 'L'
    if( para === 2) return 'M'
    if( para === 3) return 'M'
    if( para === 4) return 'J'
    if( para === 5) return 'V'
    if( para === 6) return 'S'
    if( para === 7) return 'D'
    return 'error'
}