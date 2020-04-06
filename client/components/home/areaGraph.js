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
    Riesgo: 10,
    Aptitud: 24,
    Conducta: 10,
  },
  {
    name: '11-03-20',
    Riesgo: 100,
    Aptitud: 13,
    Conducta: 24,
  },
  {
    name: '12-03-20',
    Riesgo: 40,
    Aptitud: 98,
    Conducta: 22,
  },
  {
    name: '13-03-20',
    Riesgo: 80,
    Aptitud: 39,
    Conducta: 20,
  },
  {
    name: '13-03-20',
    Riesgo: 90,
    Aptitud: 48,
    Conducta: 21,
  },
  {
    name: '14-03-20',
    Riesgo: 60,
    Aptitud: 38,
    Conducta: 25,
  },
  {
    name: '15-03-20',
    Riesgo: 50,
    Aptitud: 43,
    Conducta: 21,
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
          {this.props.riesgo && (
            <Area
              type="monotone"
              dataKey="Riesgo"
              stroke="#cb2e56"
              fill="#cb2e56"
            />
          )}
          {this.props.aptitud && (
            <Area
              type="monotone"
              dataKey="Aptitud"
              stroke="#F278A4"
              fill="#F278A4"
            />
          )}
          {this.props.conducta && (
            <Area
              type="monotone"
              dataKey="Conducta"
              stroke="#D2AEC0"
              fill="#D2AEC0"
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
