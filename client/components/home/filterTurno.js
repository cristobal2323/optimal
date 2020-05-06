import React, { useEffect, useRef } from 'react';

const FilterTurno = (props) => {
  const node = useRef();
  const parent = useRef();

  const handleClickHide = (e) => {
    if (parent.current.contains(e.target)) {
      if (e.target.id === 'option--menu--turno') {
        document
          .getElementById('option--menu--turno')
          .classList.toggle('active-submenu');
      }
    } else if (!node.current.contains(e.target)) {
      document
        .getElementById('option--menu--turno')
        .classList.remove('active-submenu');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickHide);
    return () => {
      document.removeEventListener('mousedown', handleClickHide);
    };
  }, []);

  return (
    <div className="grid-button">
      <ul>
        <li ref={parent} className="menu--date" id="option--menu--turno">
          Seleccione turnos
          <ul ref={node}>
            {props.statusAreaTurnos === 200 &&
              props.dataAreaTurnos.datos.map((item) => (
                <li
                  onClick={props.handleSelectShifts}
                  data-value={item.id}
                  className={
                    props.turnos.includes(item.id) ? 'active--color' : ''
                  }
                  key={item.id}
                >
                  {item.area_turno_nombre}
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};
FilterTurno.propTypes = {};

export default FilterTurno;
