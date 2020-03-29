import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const BarComponent = props => {
  const data = [];
  props.data.forEach(element => {
    data.push({
      date: moment(element.date).format('DD-MM-YYYY'),
      value: element.value,
    });
  });

  if (props.data.length === 0) {
    return <h3>No contiene datos</h3>;
  }
  return (
    <ResponsiveContainer width="100%">
      <BarChart
        stackOffset="sign"
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#314086" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarComponent;
