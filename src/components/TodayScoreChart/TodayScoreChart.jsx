import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const TodayScoreChart = ({ dataScore }) => {
    
    const data = [
        { name: 'bar1', value: dataScore * 100 },
        { name: 'bar2', value: 100 - dataScore * 100 },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart >
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    startAngle={85}
                    endAngle={445}
                    innerRadius={78}
                    outerRadius={88}
                    paddingAngle={0}
                    dataKey="value"
                    cornerRadius="50%"
                >
                    <Cell fill="red" stroke="red" />
                    <Cell fill="transparent" stroke="transparent" />
                </Pie>
                <Pie
                    data={[{ name: 'center', value: 100 }]}
                    cx="50%"
                    cy="50%"
                    startAngle={0}
                    endAngle={360}
                    innerRadius={0}
                    outerRadius={77}
                    fill="white"
                    paddingAngle={0}
                    dataKey="value"
                ></Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default TodayScoreChart;
