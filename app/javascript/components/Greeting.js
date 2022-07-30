import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useEffect } from 'react';
const REQUEST_GREETING = 'REQUEST_GREETING';
const LOAD_GREETING = 'LOAD_GREETING';
const GREETING_FAILED = 'GREETING_FAILED';

const getGreeting = () => (dispatch) => {
  dispatch({ type: REQUEST_GREETING });
  fetch(`api/messages`)
    .then((response) => response.json())
    .then((result) => dispatch({ type: LOAD_GREETING, payload: result }))
    .catch((error) => dispatch({ type: LOAD_GREETING, payload: error }));
};

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreeting());
  }, []);
  const { greeting } = useSelector(
    (state) => state.GreetingsReducer.greeting,
    shallowEqual,
  );
  return greeting ? <p>{greeting}</p> : <p>Loading</p>;
};

export default Greeting;
