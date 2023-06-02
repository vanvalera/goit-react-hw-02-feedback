import React from 'react';
import css from './section.module.css';
import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
  return (
    <section className={css.container}>
      <h2 className={css.section__title}>{title}</h2>
      {children}
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
