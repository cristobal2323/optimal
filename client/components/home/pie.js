import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#FF2F1E', '#FEB71B', '#00C756'];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  value,
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
    >
      {`${value.toFixed(0)}`}
    </text>
  );
};

const PieComponent = (props) => {
  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          data={props.data}
          labelLine={false}
          label={renderCustomizedLabel}
          fill="#8884d8"
          dataKey="value"
        >
          {props.data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieComponent;
