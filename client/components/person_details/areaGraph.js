import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const data = [
  {
    name: '10-03-20',
    Riesgo_jornada_laboral_optimo: 10,
    Riesgo_jornada_laboral_en_riesgo: 20,
    Riesgo_jornada_laboral_alerta: 70,
    Aptitud_laboral_optimo: 24,
    Aptitud_laboral_alerta: 13,
    Aptitud_laboral_en_riesgo: 23,
    Modelo_conducta_optimo: 40,
    Modelo_conducta_alerta: 100,
    Modelo_conducta_en_riesgo: 10,
  },
  {
    name: '11-03-20',
    Riesgo_jornada_laboral_optimo: 100,
    Riesgo_jornada_laboral_en_riesgo: 10,
    Riesgo_jornada_laboral_alerta: 30,
    Aptitud_laboral_optimo: 13,
    Aptitud_laboral_alerta: 23,
    Aptitud_laboral_en_riesgo: 44,
    Modelo_conducta_optimo: 50,
    Modelo_conducta_alerta: 90,
    Modelo_conducta_en_riesgo: 24,
  },
  {
    name: '12-03-20',
    Riesgo_jornada_laboral_optimo: 40,
    Riesgo_jornada_laboral_en_riesgo: 20,
    Riesgo_jornada_laboral_alerta: 70,
    Aptitud_laboral_optimo: 98,
    Aptitud_laboral_alerta: 33,
    Aptitud_laboral_en_riesgo: 98,
    Modelo_conducta_optimo: 60,
    Modelo_conducta_alerta: 80,
    Modelo_conducta_en_riesgo: 22,
  },
  {
    name: '13-03-20',
    Riesgo_jornada_laboral_optimo: 80,
    Riesgo_jornada_laboral_en_riesgo: 40,
    Riesgo_jornada_laboral_alerta: 10,
    Aptitud_laboral_optimo: 39,
    Aptitud_laboral_alerta: 63,
    Aptitud_laboral_en_riesgo: 100,
    Modelo_conducta_optimo: 70,
    Modelo_conducta_alerta: 70,
    Modelo_conducta_en_riesgo: 20,
  },
  {
    name: '13-03-20',
    Riesgo_jornada_laboral_optimo: 90,
    Riesgo_jornada_laboral_en_riesgo: 100,
    Riesgo_jornada_laboral_alerta: 20,
    Aptitud_laboral_optimo: 48,
    Aptitud_laboral_alerta: 93,
    Aptitud_laboral_en_riesgo: 24,
    Modelo_conducta_optimo: 80,
    Modelo_conducta_alerta: 60,
    Modelo_conducta_en_riesgo: 21,
  },
  {
    name: '14-03-20',
    Riesgo_jornada_laboral_optimo: 60,
    Riesgo_jornada_laboral_en_riesgo: 50,
    Riesgo_jornada_laboral_alerta: 90,
    Aptitud_laboral_optimo: 38,
    Aptitud_laboral_alerta: 22,
    Aptitud_laboral_en_riesgo: 4,
    Modelo_conducta_optimo: 90,
    Modelo_conducta_alerta: 50,
    Modelo_conducta_en_riesgo: 25,
  },
  {
    name: '15-03-20',
    Riesgo_jornada_laboral_optimo: 50,
    Riesgo_jornada_laboral_en_riesgo: 20,
    Riesgo_jornada_laboral_alerta: 10,
    Aptitud_laboral_optimo: 43,
    Aptitud_laboral_alerta: 15,
    Aptitud_laboral_en_riesgo: 67,
    Modelo_conducta_optimo: 100,
    Modelo_conducta_alerta: 40,
    Modelo_conducta_en_riesgo: 21,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer>
        <LineChart
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
          {this.props.riesgo && this.props.optimo && (
            <Line
              type="monotone"
              dataKey="Riesgo_jornada_laboral_optimo"
              stroke="#9BF0AC"
            />
          )}
          {this.props.riesgo && this.props.enriesgo && (
            <Line
              type="monotone"
              dataKey="Riesgo_jornada_laboral_en_riesgo"
              stroke="#cb2e56"
            />
          )}
          {this.props.riesgo && this.props.alerta && (
            <Line
              type="monotone"
              dataKey="Riesgo_jornada_laboral_alerta"
              stroke="#F0EF9B"
            />
          )}
          {this.props.aptitud && this.props.optimo && (
            <Line
              type="monotone"
              dataKey="Aptitud_laboral_optimo"
              stroke="#6BF620"
            />
          )}
          {this.props.aptitud && this.props.alerta && (
            <Line
              type="monotone"
              dataKey="Aptitud_laboral_alerta"
              stroke="#E7E30D"
            />
          )}
          {this.props.aptitud && this.props.enriesgo && (
            <Line
              type="monotone"
              dataKey="Aptitud_laboral_en_riesgo"
              stroke="#F278A4"
            />
          )}
          {this.props.conducta && this.props.optimo && (
            <Line
              type="monotone"
              dataKey="Modelo_conducta_optimo"
              stroke="#A9F372"
            />
          )}
          {this.props.conducta && this.props.alerta && (
            <Line
              type="monotone"
              dataKey="Modelo_conducta_alerta"
              stroke="#F3DB72"
            />
          )}
          {this.props.conducta && this.props.enriesgo && (
            <Line
              type="monotone"
              dataKey="Modelo_conducta_en_riesgo"
              stroke="#D2AEC0"
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
