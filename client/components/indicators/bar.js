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
        data.push({ name: `${hora}`, valor: element.energia, num: hora });
      }
    });
  });
  let index;
  arr.forEach(element => {
    index = data.findIndex(x => x.num === element);
    if (index < 0) {
      dataFinal.push({ name: `${element} hrs`, valor: 0, num: element });
    } else {
      dataFinal.push({
        name: `${data[index].name} hrs`,
        valor: data[index].valor.toFixed(4),
        num: data[index].num,
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
        valor: element.energia,
        num: days[index].num,
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
      });
    } else {
      dataFinal.push({
        name: `${days[main].day}`,
        valor: data[index1].valor.toFixed(2),
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
        valor: element.energia,
        num: days[index].num,
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
      });
    } else {
      dataFinal.push({
        name: `${days[i].day}`,
        valor: data[index1].valor.toFixed(2),
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
        valor: element.energia,
        num: months[index].num,
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
      });
    } else {
      dataFinal.push({
        name: `${months[main].month}`,
        valor: data[index1].valor.toFixed(2),
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
  return (
    <ResponsiveContainer>
      <BarChart
        stackOffset="sign"
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="valor" fill="#314086" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarComponent;
