import React from 'react';
import cx from 'classnames';

const Button = ({ children, theme, size, onClick, disabled }) => {
  return (
    <button
      className={cx('button', { [`button--${theme}`]: theme, [`button--${size}`]: size })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
