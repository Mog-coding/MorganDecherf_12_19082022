import React from 'react';
import PropTypes from 'prop-types';
import { UserPerformance } from '../../models/userPerformance';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from 'recharts';

/**
 * @description component radarChart that displays the user's performance: cardio, énergie, endurance, force, vitesse, intentisté
 */
const PerformanceChart = ({dataPerformance}) => {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="100%"
                innerRadius={10}
                data={dataPerformance.performance}
                margin={{
                    top: 20,
                    right: 45,
                    left: 45,
                    bottom: 20,
                }}
            >
                <PolarGrid gridType="polygon" radialLines={false} />
                <PolarAngleAxis
                    dataKey="label"
                    stroke="white"
                    tickLine=""
                    style={{
                        fontSize: '0.6rem',
                    }}
                />
                <Radar
                    name="Mike"
                    dataKey="value"
                    fill="red"
                    fillOpacity={0.6}
                />
            </RadarChart>
        </ResponsiveContainer>
    );
};

PerformanceChart.propTypes = {
    dataPerformance: PropTypes.instanceOf(UserPerformance).isRequired,
};

export default PerformanceChart;
