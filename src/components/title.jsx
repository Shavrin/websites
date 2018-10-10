import React from 'react';
import PropTypes from 'prop-types';

function Title(props) {
  const { name } = props;
  return <div className="title">{name}</div>;
}

Title.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Title;
