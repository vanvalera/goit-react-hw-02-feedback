import React from 'react';
import css from './section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={css.section__title}>{title}</h2>
      {children}
    </section>
  );
};
