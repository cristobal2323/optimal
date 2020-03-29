import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  BarChart,
  Bar,
  ReferenceLine,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  ComposedChart,
  Line,
  AreaChart,
  Area,
} from 'recharts';

const day = value => {
  const data = [];
  const dataFinal = [];
  const arr = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
  ];
  value.forEach(element => {
    arr.forEach(hora => {
      if (hora == moment(element.fecha_corresponde).format('HH')) {
        data.push({
          name: `${hora}`,
          valor: Math.round(element.potencia_promedio),
          num: hora,
          promedio: [
            Math.round(element.potencia_minima),
            Math.round(element.potencia_maxima),
          ],
        });
      }
    });
  });
  let index;
  arr.forEach(element => {
    index = data.findIndex(x => x.num === element);
    if (index < 0) {
      dataFinal.push({
        name: `${element} hrs`,
        valor: 0,
        num: element,
        promedio: [0, 0],
      });
    } else {
      dataFinal.push({
        name: `${data[index].name} hrs`,
        valor: data[index].valor,
        num: data[index].num,
        promedio: data[index].promedio,
      });
    }
  });

  return dataFinal;
};

const week = value => {
  const data = [];
  const dataFinal = [];
  const days = [
    { day: 'Domingo', num: 0 },
    { day: 'Lunes', num: 1 },
    { day: 'Martes', num: 2 },
    { day: 'Miercoles', num: 3 },
    { day: 'Jueves', num: 4 },
    { day: 'Viernes', num: 5 },
    { day: 'Sabado', num: 6 },
  ];
  let index;
  value.forEach(element => {
    index = days.findIndex(
      x => x.num === moment(element.fecha_corresponde).day(),
    );
    if (index >= 0) {
      data.push({
        name: `${days[index].day}`,
        valor: Math.round(element.potencia_promedio),
        num: days[index].num,
        promedio: [
          Math.round(element.potencia_minima),
          Math.round(element.potencia_maxima),
        ],
      });
    }
  });

  let main = moment().day();
  let i;
  let index1;
  for (i = 0; i <= 6; i++) {
    index1 = data.findIndex(x => x.num === main);
    if (index1 < 0) {
      dataFinal.push({
        name: `${days[main].day}`,
        valor: 0,
        num: main,
        promedio: [0, 0],
      });
    } else {
      dataFinal.push({
        name: `${days[main].day}`,
        valor: data[index1].valor,
        promedio: data[index1].promedio,
        num: main,
      });
    }
    if (main === 0) {
      main = 6;
    } else {
      main--;
    }
  }

  return dataFinal.reverse();
};

const month = (value, totalDays, sDate) => {
  const data = [];
  const dataFinal = [];

  const startdate = sDate;
  const days = [];
  let num;

  for (num = 0; num <= totalDays; num++) {
    if (num == 0) {
      days.push({ day: startdate.subtract(0, 'days').format('DD-MM'), num });
    } else {
      days.push({ day: startdate.subtract(1, 'days').format('DD-MM'), num });
    }
  }

  let index;
  value.forEach(element => {
    index = days.findIndex(
      x => x.day === moment(element.fecha_corresponde).format('DD-MM'),
    );

    if (index >= 0) {
      data.push({
        name: `${days[index].day}`,
        valor: Math.round(element.potencia_promedio),
        num: days[index].num,
        promedio: [
          Math.round(element.potencia_minima),
          Math.round(element.potencia_maxima),
        ],
      });
    }
  });

  let i;
  let index1;

  for (i = 0; i < days.length; i++) {
    index1 = data.findIndex(x => x.num === i);
    if (index1 < 0) {
      dataFinal.push({
        name: `${days[i].day}`,
        valor: 0,
        num: i,
        promedio: [0, 0],
      });
    } else {
      dataFinal.push({
        name: `${days[i].day}`,
        valor: data[index1].valor,
        promedio: data[index1].promedio,
        num: i,
      });
    }
  }

  return dataFinal.reverse();
};

const year = value => {
  const data = [];
  const dataFinal = [];
  const months = [
    { month: 'Enero', num: 0 },
    { month: 'Febrero', num: 1 },
    { month: 'Marzo', num: 2 },
    { month: 'Abril', num: 3 },
    { month: 'Mayo', num: 4 },
    { month: 'Junio', num: 5 },
    { month: 'Julio', num: 6 },
    { month: 'Agosto', num: 7 },
    { month: 'Septiembre', num: 8 },
    { month: 'Octubre', num: 9 },
    { month: 'Noviembre', num: 10 },
    { month: 'Diciembre', num: 11 },
  ];
  let index;

  value.forEach(element => {
    index = months.findIndex(
      x => x.num === moment(element.fecha_corresponde).month(),
    );
    if (index >= 0) {
      data.push({
        name: `${months[index].month}`,
        valor: Math.round(element.potencia_promedio),
        num: months[index].num,
        promedio: [
          Math.round(element.potencia_minima),
          Math.round(element.potencia_maxima),
        ],
      });
    }
  });

  let main = moment().month();
  let i;
  let index1;
  for (i = 0; i <= 11; i++) {
    index1 = data.findIndex(x => x.num === main);
    if (index1 < 0) {
      dataFinal.push({
        name: `${months[main].month}`,
        valor: 0,
        num: main,
        promedio: [0, 0],
      });
    } else {
      dataFinal.push({
        name: `${months[main].month}`,
        valor: data[index1].valor,
        promedio: data[index1].promedio,
        num: main,
      });
    }
    if (main === 0) {
      main = 11;
    } else {
      main--;
    }
  }

  return dataFinal.reverse();
};

const BarComponent = props => {
  let data = [];
  if (props.type == 'day') {
    data = day(props.data.indicadores.data.historial);
  } else if (props.type == 'week') {
    data = week(props.data.indicadores.data.historial);
  } else if (props.type == 'month') {
    data = month(props.data.indicadores.data.historial, 30, moment());
  } else if (props.type == 'year') {
    data = year(props.data.indicadores.data.historial);
  } else if (props.type == null) {
    const date1 = moment(props.start);
    const date2 = moment(props.end);
    const diffInDays = date2.diff(date1, 'days');
    data = month(props.data.indicadores.data.historial, diffInDays, date2);
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p>{`${label}`}</p>
          <p className="orange">{`Potencia promedio estimada:: ${payload[0].payload.valor}`}</p>
          <p className="purple">
            {`Rango estimado  ${payload[0].payload.promedio[0]} - ${
              payload[0].payload.promedio[1]
            }`}
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer>
      <ComposedChart
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, 'dataMax + 10']} />
        <Tooltip content={<CustomTooltip />} />
        <ReferenceLine y={30} label="Max" stroke="#FF3C3C" />
        <ReferenceLine x="17 hrs" stroke="#FF3C3C" label="Horario punta" />
        <ReferenceLine x="23 hrs" stroke="#FF3C3C" />
        <Area
          fillOpacity={0.3}
          dataKey="promedio"
          stroke="#314086"
          fill="#314086"
        />
        <Line dataKey="valor" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default BarComponent;
