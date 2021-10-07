import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.scss';

const Filter = ({ value, onChange }) => (
  <label className={s.label}>
    Find contacts by name
    <input
      type="text"
      // как искать и по номеру?
      value={value}
      onChange={onChange}
      className={s.input}
    ></input>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
