import React from 'react';
import './ActivityChart.css';
import PropTypes from 'prop-types';
import { Sessions } from '../../models/activityModel';
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
} from 'recharts';

/**
 * @description allow to customize chart's tooltip
 */
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${payload[0].value} kg`}</p>
                <p className="label">{`${payload[1].value} Kcal`}</p>
            </div>
        );
    }
    return null;
};

/**
 * @description component barChart that displays user's weight and calories burned depending on days
 */
const ActivityChart = ({ dataActivity }) => {

    return (
        <ResponsiveContainer height={190} width="100%">
            <BarChart data={dataActivity.sessions} barGap={8}>
                <CartesianGrid
                    vertical=""
                    stroke="#ccc"
                    strokeDasharray="2 2"
                />
                <XAxis
                    dataKey="day"
                    tickLine=""
                    tickMargin={14}
                    stroke="#9b9eac"
                    cornerRadius="50%"
                />
                <YAxis
                    yAxisId="left-axis"
                    orientation="left"
                    dataKey="calories"
                    type="number"
                    hide="true"
                />
                <YAxis
                    yAxisId="right-axis"
                    orientation="right"
                    dataKey="kilogram"
                    type="number"
                    tickLine=""
                    tickMargin={30}
                    stroke="#9b9eac"
                    domain={[
                        (dataMin) => dataMin -2,
                        (dataMax) => dataMax +2,
                    ]}
                />
                <Tooltip
                    content={<CustomTooltip />}
                    cursor={{ fill: 'rgba(223,223,223,0.6)' }}
                    wrapperStyle={{ outline: 'none' }}
                    offset={60}
                />
                <Bar
                    yAxisId="right-axis"
                    type="monotone"
                    dataKey="kilogram"
                    barSize={7}
                    fill="#282d30"
                    radius={[4, 4, 0, 0]}
                />
                <Bar
                    yAxisId="left-axis"
                    type="monotone"
                    dataKey="calories"
                    barSize={7}
                    fill="#e60000"
                    radius={[4, 4, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
    )
};

ActivityChart.propTypes = {
    dataActivity: PropTypes.instanceOf(Sessions).isRequired
};
CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array
}

export default ActivityChart;
