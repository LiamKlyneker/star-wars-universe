import React from 'react';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';

import { LuarLogo, IconButton } from 'luar-components';
import UserMenu from '#components/user-menu';

import styles from './styles.module.scss';

const MainHeader = () => {
  const history = useHistory();
  return (
    <header className={cx(styles.mainHeader)}>
      <div>
        <LuarLogo onClick={() => history.push('/')} />
        <div className={cx(styles.mainHeader__options)}>
          <div className={cx(styles.options__inbox)}>
            <IconButton icon="inbox" class />
          </div>
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
