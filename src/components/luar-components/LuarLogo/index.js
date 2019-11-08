import React from 'react';
import cx from 'classnames';

import { ReactComponent as Logo } from '/src/static/luar-logo.svg';

const LuarLogo = ({ onClick }) => <Logo className={cx('main-logo')} onClick={onClick} />;

export default LuarLogo;
