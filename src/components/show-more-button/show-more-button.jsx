import React from 'react';
import PropTypes from 'prop-types';
import {RENDER_PER_STEP_COUNT} from '../../utils/const';
import './show-more-button.css';

const ShowMoreButton = (props) => {
  const {incRenderCount} = props;

  return (
    <button
      onClick={incRenderCount}
      className="button show-more-button"
    >Показать еще {RENDER_PER_STEP_COUNT} билетов!</button>
  );
};

ShowMoreButton.propTypes = {
  incRenderCount: PropTypes.func.isRequired,
};

export default ShowMoreButton;
