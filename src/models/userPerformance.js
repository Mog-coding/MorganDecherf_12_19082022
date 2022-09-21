export class UserPerformance {
    constructor(dataPerf, kind) {
        if (dataPerf) {
            this.performance = dataPerf.map((elPerf) => {
                return {
                    label: this.translateLabel(kind[elPerf.kind]),
                    value: elPerf.value,
                }
            })
        }
    }

    translateLabel(label) {
        switch (label) {
            case 'energy':
                return 'Énergie';
            case 'strength':
                return 'Force';
            case 'speed':
                return 'Vitesse';
            case 'intensity':
                return 'Intensité';
            case 'cardio':
                return 'Cardio';
            case 'endurance':
                return 'Endurance';
            default:
                return label;
        }
    }
}