import React from 'react';
import './AverageSessionsChart.css';
import PropTypes from 'prop-types';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

/**
 * @description allow to customize chart's tooltip
 * @param {boolean} active true if chart hover
 * @param {array<object>} payload allow to customize legend
 * @returns {ReactElement}
 */

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${payload[0].value} min`}</p>
            </div>
        );
    }
    return null;
};

/**
 * @description allow to customize active dot
 * @param {object} props object propertys allow to customize active dot
 * @returns {ReactElement}
 */

const CustomizedDot = (props) => {
    const { cx, cy } = props;
    return (

        <circle
            cx={cx}
            cy={cy}
            r={4}
            stroke="rgba(255,255,255,0.4)"
            strokeWidth={8}
            fill="white"
        />
    )
};

/**
 * @description component lineChart that displays the duration of user sessions according to days
 * @param {object} dataSessions 
 * @param {array<object>} dataSessions.sessions contains {day: string, sessionLength: number}
 * @returns {ReactElement}
 */

const AverageSessionsChart = ({ dataSessions }) => {

    return (
        <>
            <ResponsiveContainer width="100%" height="75%">
                <LineChart
                    data={dataSessions.sessions}
                    margin={{
                        top: 1,
                        right: 10,
                        left: 10,
                        bottom: 10,
                    }}
                    onMouseMove={(e) => {
                        const divChartAverage = document.querySelector(
                            '.chartAverageSession'
                        );
                        if (e.isTooltipActive) {
                            let widthChartAverage = divChartAverage.clientWidth;
                            let cursorPositionPercent =
                                (e.activeCoordinate.x / widthChartAverage) *
                                100;
                            divChartAverage.style.background = `linear-gradient(90deg, #ff0000 ${cursorPositionPercent}%, #e60000 ${cursorPositionPercent}%)`;
                        } else {
                            divChartAverage.style.background = '#ff0000';
                        }
                    }}
                >
                    <defs>
                        <linearGradient
                            id="colorUv"
                            x1="0"
                            y1="0"
                            x2="1"
                            y2="0"
                        >
                            <stop
                                offset="5%"
                                stopColor="#ff6868"
                                stopOpacity={1}
                            />
                            <stop
                                offset="95%"
                                stopColor="#fde6e6"
                                stopOpacity={1}
                            />
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="day"
                        axisLine=""
                        tickLine=""
                        stroke="#ff7d7d"
                        style={{
                            fontSize: '0.9em',
                        }}
                    />
                    <YAxis
                        stroke="white"
                        domain={[
                            (dataMin) => {
                                return dataMin === 0
                                    ? -15
                                    : Math.floor(0.8 * dataMin);
                            },
                            (dataMax) => Math.ceil(1.1 * dataMax),
                        ]}
                        hide="true"
                    />
                    <Tooltip
                        content={<CustomTooltip />}
                        wrapperStyle={{ outline: 'none' }}
                        cursor={false}
                    />
                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        strokeWidth={2}
                        stroke="url(#colorUv)"
                        dot=""
                        activeDot={<CustomizedDot />}
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
};

AverageSessionsChart.propTypes = {
    dataSessions: PropTypes.object.isRequired,
};

export default AverageSessionsChart;
