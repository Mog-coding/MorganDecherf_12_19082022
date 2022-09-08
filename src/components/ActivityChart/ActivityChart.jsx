import './ActivityChart.css';
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Legend,
    Tooltip,
} from 'recharts';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${payload[1].value} kg`}</p>
                <p className="label">{`${payload[0].value} Kcal`}</p>
            </div>
        );
    }
    return null;
};

const ActivityChart = ({ dataActivity }) => {
    console.log('data chart', dataActivity.sessions);

    return (
        <ResponsiveContainer width="100%" aspect={2.88}>
            <BarChart width={770} data={dataActivity.sessions} barGap={8}>
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
                />
                <YAxis
                    yAxisId="left-axis"
                    orientation="left"
                    dataKey="calories"
                    type="number"
                    domain={[
                        (dataMin) => Math.floor(0.9 * dataMin),
                        (dataMax) => Math.ceil(1.03 * dataMax),
                    ]}
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
                        (dataMin) => Math.floor(0.98 * dataMin),
                        (dataMax) => Math.ceil(1.01 * dataMax),
                    ]}
                />
                <Tooltip content={<CustomTooltip />} offset={60} />
                <Legend
                    height={85}
                    verticalAlign="top"
                    align="right"
                    iconSize="8"
                    payload={[
                        {
                            value: 'Poids (kg)',
                            type: 'circle',
                            id: 'ID01',
                        },
                        {
                            value: 'Calories brûlées (kcal)',
                            type: 'circle',
                            id: 'ID02',
                        },
                    ]}
                />
                <Bar
                    yAxisId="left-axis"
                    type="monotone"
                    dataKey="calories"
                    barSize={7}
                    fill="#282d30"
                />
                <Bar
                    yAxisId="right-axis"
                    type="monotone"
                    dataKey="kilogram"
                    barSize={7}
                    fill="#e60000"
                />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default ActivityChart;

{
    /* <Bar
yAxisId="left-axis"
type="monotone"
dataKey="oo"
barSize={7}
fill="#fbfbfb"
/> */
}
