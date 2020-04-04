import React, { PureComponent } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  ResponsiveContainer,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const data = [
  {
    name: '10-03-20',
    uv: 10,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '11-03-20',
    uv: 100,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '12-03-20',
    uv: 40,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '13-03-20',
    uv: 80,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '13-03-20',
    uv: 90,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '14-03-20',
    uv: 60,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '15-03-20',
    uv: 50,
    pv: 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#cb2e56" fill="#cb2e56" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
