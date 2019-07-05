import React from 'react';
import PropTypes from 'prop-types';

const layout = ({ children }) => (
  <>
    <main>
      {children}
    </main>
  </>
);

export default layout;

layout.propTypes = {
  children: PropTypes.element.isRequired,
};
