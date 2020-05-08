import React from 'react';
import PropTypes from 'prop-types';

/* Component */
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';

const paginator = (num, handlePaginator, pag) => {
  const arr = [];
  let count = 0;
  const index = pag.startPaginator;
  const totalPag = Math.ceil(num / pag.sum);
  for (let i = index; i < num; i++) {
    if (count < 10 && i <= totalPag) {
      const classStart = pag.startPaginator == i ? 'start' : '';
      const classEnd = pag.endPaginator == i ? 'end' : '';
      arr.push(
        <Button
          data-start={classStart}
          data-end={classEnd}
          className={pag.main == i ? 'active' : ''}
          data-num={i}
          onClick={handlePaginator}
          key={i}
        >
          {i}
        </Button>,
      );
      count++;
    }
  }

  return arr;
};

const Paginator = (props) => {
  const totalElement = props.num * props.pag.sum;
  const totalPag = Math.ceil(totalElement / props.pag.sum);
  return (
    <section className="module--mapa__paginator">
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="mr-2" aria-label="Second group">
          {props.pag.main > 1 && (
            <Button
              data-start={
                props.pag.main === props.pag.startPaginator ? 'start' : ''
              }
              data-num={props.pag.main - 1}
              onClick={props.handlePaginator}
            >
              <i className="fas fa-caret-left" />
            </Button>
          )}
        </ButtonGroup>
        <ButtonGroup className="mr-2" aria-label="First group">
          {paginator(totalElement, props.handlePaginator, props.pag)}
        </ButtonGroup>
        <ButtonGroup aria-label="Third group">
          {props.pag.main !== totalPag && (
            <Button
              data-end={props.pag.main === props.pag.endPaginator ? 'end' : ''}
              data-num={props.pag.main + 1}
              onClick={props.handlePaginator}
            >
              {' '}
              <i className="fas fa-caret-right" />
            </Button>
          )}
        </ButtonGroup>
      </ButtonToolbar>
    </section>
  );
};
Paginator.propTypes = {};

export default Paginator;
