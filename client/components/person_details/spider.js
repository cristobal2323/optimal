import React, { PureComponent } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { subject: 'Conducta', A: 120, B: 110, fullMark: 150 },
  { subject: 'Jornada', A: 98, B: 130, fullMark: 150 },
  { subject: 'FIT2000', A: 86, B: 130, fullMark: 150 },
  { subject: 'Sobereye', A: 99, B: 100, fullMark: 150 },
  { subject: 'K-test', A: 85, B: 90, fullMark: 150 },
];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer>
        <RadarChart data={data}>
          <PolarGrid />
          <PolarAngleAxis
            stroke="#ede8ea"
            tick={{ fontSize: 11 }}
            dataKey="subject"
          />
          <PolarRadiusAxis
            stroke="#ede8ea"
            tick={{ fontSize: 11 }}
            angle={30}
            domain={[0, 150]}
          />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#cb2e56"
            fill="#cb2e56"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
