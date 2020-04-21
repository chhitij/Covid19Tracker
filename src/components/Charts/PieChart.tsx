import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { red } from '@material-ui/core/colors';

const COLORS = ['#f57c00', 'red', '#00e676'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      fontSize="12px"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const SimplePieChart = (props) => {
  const { chartData } = props;
  let data = [
    { name: 'Active', value: chartData.cases.active },
    { name: 'Deaths', value: chartData.deaths.total },
    { name: 'Recoverd', value: chartData.cases.recovered },
  ];
  return (
    <PieChart width={250} height={120}>
      <Pie
        data={data}
        cx={125}
        cy={60}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={55}
        fill="#8884d8"
      >
        {data.map((entry, index) => (
          <Cell fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default SimplePieChart;
