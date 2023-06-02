import React from 'react';
import classNames from 'classnames';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  if (total === 0) {
    return <Notification message="There is no feedback" />;
  }
  return (
    <>
      <div className={classNames(css.font20)}>
        <p className={css.good}>Good: {good}</p>
        <p className={css.neutral}>Neutral: {neutral}</p>
        <p className={css.bad}>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
