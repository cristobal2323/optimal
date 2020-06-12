import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

let socket;

const Form = (props) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [number, setNumber] = useState('');
  const ENDPOINT = 'http://dataon.cl:8008';

  useEffect(() => {
    socket = io(ENDPOINT);
    setRoom('cliente');
    setName('usuario');

    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT]);

  useEffect(() => {
    socket.on('number', (obj) => {
      console.log(obj);
      setNumber(obj.number);
    });
  }, []);

  const nextNumber = (event) => {
    event.preventDefault();
    if (number) {
      socket.emit('nextNumber', number, (error) => {
        if (error) {
          alert(error);
        }
      });
    }
  };

  return (
    <section>
      <h1> Fifo atención: {number}</h1>
      <button className="sendButton" onClick={(e) => nextNumber(e)}>
        Siguiente
      </button>
    </section>
  );
};

Form.propTypes = {};

export default Form;
