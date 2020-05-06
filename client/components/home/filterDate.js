import React, { useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const FilterDate = (props) => {
  const node = useRef();
  const parent = useRef();

  const handleClickHide = (e) => {
    if (parent.current.contains(e.target)) {
      if (e.target.id === 'option--menu--date') {
        document
          .getElementById('option--menu--date')
          .classList.toggle('active-submenu');
      }
    } else if (!node.current.contains(e.target)) {
      document
        .getElementById('option--menu--date')
        .classList.remove('active-submenu');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickHide);
    return () => {
      document.removeEventListener('mousedown', handleClickHide);
    };
  }, []);

  let textType;
  if (props.typeFilter === 1) {
    textType = 'Día';
  } else if (props.typeFilter === 2) {
    textType = '1 Semana';
  } else if (props.typeFilter === 3) {
    textType = '2 Semana';
  } else if (props.typeFilter === 4) {
    textType = 'Mes';
  } else if (props.typeFilter === 5) {
    if (props.startDate && props.endDate) {
      textType = `${moment(props.startDate).format('DD-MM-YYYY')} - ${moment(
        props.endDate,
      ).format('DD-MM-YYYY')}`;
    } else {
      textType = 'Seleccione un rango';
    }
  }

  return (
    <div className="grid-button">
      <ul>
        <li ref={parent} className="menu--date" id="option--menu--date">
          Rango seleccionado: {textType}
          <ul ref={node}>
            <li
              data-date="1"
              onClick={() => {
                props.handleTypeFilter(1);
              }}
            >
              Día
            </li>
            <li
              data-date="2"
              onClick={() => {
                props.handleTypeFilter(2);
              }}
            >
              1 Semana
            </li>
            <li
              data-date="2"
              onClick={() => {
                props.handleTypeFilter(3);
              }}
              data-date="3"
            >
              2 Semanas
            </li>
            <li
              data-date="2"
              onClick={() => {
                props.handleTypeFilter(4);
              }}
              data-date="4"
            >
              Mes
            </li>
            <li>
              <div className="grid-button_menu-date">
                <div className="grid-button_menu-date_a">Otro: </div>
                <div className="grid-button_menu-date_b">
                  <DatePicker
                    autoComplete="off"
                    selected={props.startDate}
                    onChange={props.handleChangeStart}
                    isClearable={true}
                    disabledKeyboardNavigation
                    placeholderText="Desde"
                    className="input-date"
                    id="date-start"
                    dateFormat="dd-MM-yyyy"
                  />
                </div>
                <div className="grid-button_menu-date_b">
                  <DatePicker
                    autoComplete="off"
                    selected={props.endDate}
                    onChange={props.handleChangeEnd}
                    isClearable={true}
                    disabledKeyboardNavigation
                    placeholderText="Hasta"
                    className="input-date"
                    id="date-end"
                    dateFormat="dd-MM-yyyy"
                  />
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
FilterDate.propTypes = {};

export default FilterDate;
