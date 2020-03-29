import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

/* Component */
import TableVehicle from './tableVehicle';
import TableCargadores from './tableCargadores';
import TableEventos from './tableEventos';
import TableConductores from './tableConductores';
import Button from './button';
import Paginator from './paginator';

const chooseTable = (type, data, onModal, pag, search, sort, handleSort) => {
  let table;
  let arr;
  switch (type) {
    case 'vehiculo': {
      table = (
        <TableVehicle
          handleSort={handleSort}
          data={data.response}
          onModal={onModal}
          sort={sort.sort}
        />
      );
      break;
    }
    case 'cargadores':
      table = (
        <TableCargadores
          handleSort={handleSort}
          sort={sort.sort}
          data={data.response.chargers}
          onModal={onModal}
        />
      );
      break;
    case 'eventos':
      arr = _.filter(data.eventos, o => {
        if (
          _.includes(o.nombre_evento.toLowerCase(), search.toLowerCase()) ||
          _.includes(
            o.alarmas.toString().toLowerCase(),
            search.toLowerCase(),
          ) ||
          _.includes(
            o.ultima_modificacion
              ? o.ultima_modificacion.toString().toLowerCase()
              : '',
            search.toLowerCase(),
          )
        ) {
          return true;
        }
        return false;
      });
      if (sort.sort.column !== '') {
        arr = _.sortBy(arr, [sort.sort.column]);
        if (sort.sort.direction === 'des') {
          arr = _.reverse(arr);
        }
      }
      arr = _.slice(arr, [pag.start], [pag.end]);
      table = (
        <TableEventos
          handleSort={handleSort}
          sort={sort.sort}
          data={arr}
          onModal={onModal}
        />
      );
      break;
    case 'conductores':
      table = (
        <TableConductores
          handleSort={handleSort}
          sort={sort.sort}
          data={data.response.people}
          onModal={onModal}
        />
      );
      break;
    default:
      table = 'No hay datos';
  }
  return table;
};

const choosePaginator = (type, data, handlePaginator, pag, search) => {
  let paginator;
  let arr;

  switch (type) {
    case 'vehiculo': {
      paginator = (
        <Paginator
          handlePaginator={handlePaginator}
          num={data.count}
          pag={pag}
        />
      );
      break;
    }
    case 'cargadores':
      paginator = (
        <Paginator
          handlePaginator={handlePaginator}
          num={data.response.pagesCount}
          pag={pag}
        />
      );
      break;
    case 'eventos':
      arr = _.filter(data.eventos, o => {
        if (
          _.includes(o.nombre_evento.toLowerCase(), search.toLowerCase()) ||
          _.includes(
            o.alarmas.toString().toLowerCase(),
            search.toLowerCase(),
          ) ||
          _.includes(
            o.ultima_modificacion
              ? o.ultima_modificacion.toString().toLowerCase()
              : '',
            search.toLowerCase(),
          )
        ) {
          return true;
        }
        return false;
      });
      paginator = (
        <Paginator
          handlePaginator={handlePaginator}
          num={arr.length}
          pag={pag}
        />
      );
      break;
    case 'conductores':
      paginator = (
        <Paginator
          handlePaginator={handlePaginator}
          num={data.response.pagesCount}
          pag={pag}
        />
      );
      break;
    default:
      paginator = 'No hay datos';
  }
  return paginator;
};

const BoxTable = props => (
  <section className="module--mapa__boxtable">
    <Button handleSearch={props.handleSearch} handlePage={props.handlePage} />
    {chooseTable(
      props.data.type,
      props.data,
      props.onModal,
      props.pag,
      props.search,
      { sort: props.sort },
      props.handleSort,
    )}
    <div className="module--mapa__infoTable">
      <p>Mostrando registros del 1 al 4 de un total de 4 registros</p>
    </div>
    {choosePaginator(
      props.data.type,
      props.data,
      props.handlePaginator,
      props.pag,
      props.search,
    )}
  </section>
);

BoxTable.propTypes = {};

export default BoxTable;
