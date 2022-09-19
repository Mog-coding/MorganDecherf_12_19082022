import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import './AverageSessionsChart.css'

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


const CustomizedDot = (props) => {
    const { cx, cy } = props;
    return (
        <circle cx={cx} cy={cy} r={4} stroke="rgba(255,255,255,0.4)" strokeWidth={8} fill="white" />
    );
}


// {
//     day: 1,
//     sessionLength: 30
// },


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
                        const divChartAverage = document.querySelector('.chartAverageSession');
                        if (e.isTooltipActive) {
                            let widthChartAverage = divChartAverage.clientWidth;
                            let cursorPositionPercent = ((e.activeCoordinate.x / widthChartAverage) * 100)
                            divChartAverage.style.background = `linear-gradient(90deg, #ff0000 ${cursorPositionPercent}%, #e60000 ${cursorPositionPercent}%)`;
                        } else {
                            divChartAverage.style.background = "#ff0000"
                        }
                    }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="5%" stopColor="#ff6868" stopOpacity={1} />
                            <stop offset="95%" stopColor="#fde6e6" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="day"
                        axisLine=""
                        tickLine=""
                        stroke="#ff7d7d"
                        style={{
                            fontSize: '0.9em',
                        }} />
                    <YAxis
                        stroke="white"
                        domain={[(dataMin) => {
                            if (dataMin === 0){ return -15 }else{ return Math.floor(0.8 * dataMin)}
                        },
                        (dataMax) => Math.ceil(1.1 * dataMax),
                        ]}
                        hide="true"
                    />
                    <Tooltip content={<CustomTooltip />}
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
    );
};

export default AverageSessionsChart;
