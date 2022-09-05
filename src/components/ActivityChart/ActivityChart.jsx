import { BarChart, Bar, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
const data = [
    {
        name: '1',
        kc: 330,
        oo: 2400,
        kg: 70.2,
    },
    {
        name: '2',
        kc: 350,
        oo: 1398,
        kg: 70.5,
    },
    {
        name: '3',
        kc: 340,
        oo: 1398,
        kg: 70.9,
    },
    {
        name: '4',
        kc: 320,
        oo: 1398,
        kg: 70.2,
    },
    {
        name: '5',
        kc: 340,
        oo: 1398,
        kg: 70,
    },
    {
        name: '6',
        kc: 340,
        oo: 1398,
        kg: 69.9,
    },
    {
        name: '7',
        kc: 320,
        oo: 1398,
        kg: 70,
    },
    {
        name: '8',
        kc: 360,
        oo: 1398,
        kg: 70.5,
    },
    {
        name: '9',
        kc: 320,
        oo: 1398,
        kg: 70.2,
    },
    {
        name: '10',
        kc: 310,
        oo: 1398,
        kg: 70.5,
    },
];

const ActivityChart = () => {
    return (

        <ResponsiveContainer width="100%" aspect={3}>
        <BarChart width={770} height={225} data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis
                yAxisId="left-axis"
                orientation="left"
                dataKey="kc"
                domain={['dataMin', 'dataMax']}
                type="number"
            />
            <YAxis
                yAxisId="right-axis"
                orientation="right"
                dataKey="kg"
                type="number"
                domain={[
                    (dataMin) => Math.floor(dataMin),
                    (dataMax) => Math.ceil(dataMax),
                ]}
            />
            <Bar
                yAxisId="left-axis"
                type="monotone"
                dataKey="kc"
                barSize={7}
                fill="#282d30"
            />
            <Bar
                yAxisId="left-axis"
                type="monotone"
                dataKey="oo"
                barSize={7}
                fill="#fbfbfb"
            />
            <Bar
                yAxisId="right-axis"
                type="monotone"
                dataKey="kg"
                barSize={7}
                fill="#e60000"
            />
        </BarChart>
        </ResponsiveContainer>
    );
};

export default ActivityChart;
