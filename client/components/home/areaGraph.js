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
    Riesgo_jornada_laboral_bajo_riesgo: 30,
    Riesgo_jornada_laboral_en_riesgo: 20,
    Riesgo_jornada_laboral_alerta: 70,
    Fit2000_optimo: 24,
    Fit2000_bajo_riesgo: 14,
    Fit2000_alerta: 13,
    Fit2000_en_riesgo: 23,
    Sobereye_optimo: 63,
    Sobereye_en_riesgo: 91,
    K_test_optimo: 24,
    K_test_alerta: 84,
    K_test_en_riesgo: 25,
    Modelo_conducta_optimo: 40,
    Modelo_conducta_bajo_riesgo: 10,
    Modelo_conducta_alerta: 100,
    Modelo_conducta_en_riesgo: 10,
  },
  {
    name: '11-03-20',
    Riesgo_jornada_laboral_optimo: 100,
    Riesgo_jornada_laboral_bajo_riesgo: 10,
    Riesgo_jornada_laboral_en_riesgo: 10,
    Riesgo_jornada_laboral_alerta: 30,
    Fit2000_optimo: 13,
    Fit2000_bajo_riesgo: 44,
    Fit2000_alerta: 23,
    Fit2000_en_riesgo: 44,
    Sobereye_optimo: 11,
    Sobereye_en_riesgo: 71,
    K_test_optimo: 94,
    K_test_alerta: 34,
    K_test_en_riesgo: 35,
    Modelo_conducta_optimo: 50,
    Modelo_conducta_bajo_riesgo: 30,
    Modelo_conducta_alerta: 90,
    Modelo_conducta_en_riesgo: 24,
  },
  {
    name: '12-03-20',
    Riesgo_jornada_laboral_optimo: 40,
    Riesgo_jornada_laboral_bajo_riesgo: 100,
    Riesgo_jornada_laboral_en_riesgo: 20,
    Riesgo_jornada_laboral_alerta: 70,
    Fit2000_optimo: 98,
    Fit2000_bajo_riesgo: 94,
    Fit2000_alerta: 33,
    Fit2000_en_riesgo: 98,
    Sobereye_optimo: 90,
    Sobereye_en_riesgo: 1,
    K_test_optimo: 34,
    K_test_alerta: 44,
    K_test_en_riesgo: 45,
    Modelo_conducta_optimo: 60,
    Modelo_conducta_bajo_riesgo: 90,
    Modelo_conducta_alerta: 80,
    Modelo_conducta_en_riesgo: 22,
  },
  {
    name: '13-03-20',
    Riesgo_jornada_laboral_optimo: 80,
    Riesgo_jornada_laboral_bajo_riesgo: 30,
    Riesgo_jornada_laboral_en_riesgo: 40,
    Riesgo_jornada_laboral_alerta: 10,
    Fit2000_optimo: 39,
    Fit2000_bajo_riesgo: 4,
    Fit2000_alerta: 63,
    Fit2000_en_riesgo: 100,
    Sobereye_optimo: 80,
    Sobereye_en_riesgo: 11,
    K_test_optimo: 4,
    K_test_alerta: 84,
    K_test_en_riesgo: 55,
    Modelo_conducta_optimo: 70,
    Modelo_conducta_bajo_riesgo: 100,
    Modelo_conducta_alerta: 70,
    Modelo_conducta_en_riesgo: 20,
  },
  {
    name: '13-03-20',
    Riesgo_jornada_laboral_optimo: 90,
    Riesgo_jornada_laboral_bajo_riesgo: 10,
    Riesgo_jornada_laboral_en_riesgo: 100,
    Riesgo_jornada_laboral_alerta: 20,
    Fit2000_optimo: 48,
    Fit2000_bajo_riesgo: 94,
    Fit2000_alerta: 93,
    Fit2000_en_riesgo: 24,
    Sobereye_optimo: 55,
    Sobereye_en_riesgo: 87,
    K_test_optimo: 94,
    K_test_alerta: 90,
    K_test_en_riesgo: 65,
    Modelo_conducta_optimo: 80,
    Modelo_conducta_bajo_riesgo: 50,
    Modelo_conducta_alerta: 60,
    Modelo_conducta_en_riesgo: 21,
  },
  {
    name: '14-03-20',
    Riesgo_jornada_laboral_optimo: 60,
    Riesgo_jornada_laboral_bajo_riesgo: 100,
    Riesgo_jornada_laboral_en_riesgo: 50,
    Riesgo_jornada_laboral_alerta: 90,
    Fit2000_optimo: 38,
    Fit2000_bajo_riesgo: 94,
    Fit2000_alerta: 22,
    Fit2000_en_riesgo: 4,
    Sobereye_optimo: 10,
    Sobereye_en_riesgo: 9,
    K_test_optimo: 74,
    K_test_alerta: 75,
    K_test_en_riesgo: 85,
    Modelo_conducta_optimo: 90,
    Modelo_conducta_bajo_riesgo: 10,
    Modelo_conducta_alerta: 50,
    Modelo_conducta_en_riesgo: 25,
  },
  {
    name: '15-03-20',
    Riesgo_jornada_laboral_optimo: 50,
    Riesgo_jornada_laboral_bajo_riesgo: 40,
    Riesgo_jornada_laboral_en_riesgo: 20,
    Riesgo_jornada_laboral_alerta: 10,
    Fit2000_optimo: 43,
    Fit2000_bajo_riesgo: 14,
    Fit2000_alerta: 15,
    Fit2000_en_riesgo: 67,
    Sobereye_optimo: 15,
    Sobereye_en_riesgo: 100,
    K_test_optimo: 30,
    K_test_alerta: 10,
    K_test_en_riesgo: 97,
    Modelo_conducta_optimo: 100,
    Modelo_conducta_bajo_riesgo: 20,
    Modelo_conducta_alerta: 40,
    Modelo_conducta_en_riesgo: 21,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer>
        <LineChart
          data={this.props.data.datos}
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
              stroke="#FF5733"
            />
          )}
          {this.props.riesgo && this.props.bajoRiesgo && (
            <Line
              type="monotone"
              dataKey="Riesgo_jornada_laboral_bajo_riesgo"
              stroke="#F0EF9B"
            />
          )}
          {this.props.fit2000 && this.props.optimo && (
            <Line type="monotone" dataKey="Fit2000_optimo" stroke="#6BF620" />
          )}
          {this.props.fit2000 && this.props.bajoRiesgo && (
            <Line
              type="monotone"
              dataKey="Fit2000_bajo_riesgo"
              stroke="#E7E30D"
            />
          )}
          {this.props.fit2000 && this.props.alerta && (
            <Line type="monotone" dataKey="Fit2000_alerta" stroke="#FF9F33" />
          )}
          {this.props.fit2000 && this.props.enriesgo && (
            <Line
              type="monotone"
              dataKey="Fit2000_en_riesgo"
              stroke="#F278A4"
            />
          )}
          {this.props.sobereye && this.props.optimo && (
            <Line type="monotone" dataKey="Sobereye_optimo" stroke="#6BF620" />
          )}
          {this.props.sobereye && this.props.enriesgo && (
            <Line
              type="monotone"
              dataKey="Sobereye_en_riesgo"
              stroke="#8b0737"
            />
          )}
          {this.props.ktest && this.props.optimo && (
            <Line type="monotone" dataKey="K_test_optimo" stroke="#316317" />
          )}
          {this.props.ktest && this.props.alerta && (
            <Line type="monotone" dataKey="K_test_alerta" stroke="#b8641f" />
          )}
          {this.props.ktest && this.props.enriesgo && (
            <Line type="monotone" dataKey="K_test_en_riesgo" stroke="#b81f1f" />
          )}
          {this.props.conducta && this.props.optimo && (
            <Line
              type="monotone"
              dataKey="Modelo_conducta_optimo"
              stroke="#A9F372"
            />
          )}
          {this.props.conducta && this.props.bajoRiesgo && (
            <Line
              type="monotone"
              dataKey="Modelo_conducta_bajo_riesgo"
              stroke="#F3DB72"
            />
          )}
          {this.props.conducta && this.props.alerta && (
            <Line
              type="monotone"
              dataKey="Modelo_conducta_alerta"
              stroke="#ff7133"
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
