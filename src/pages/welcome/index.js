import React from 'react';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';
import { Heading, Button, Icon } from 'luar-components';

import backgroundImage from '#static/star-wars-background.jpg';
import styles from './styles.module.scss';

const WelcomePage = () => {
  const history = useHistory();
  return (
    <div
      className={cx(styles.fancyBackground)}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={cx(styles.callActionSection)}>
        <Heading as="h2">
          Are you sure that you know everything about this universe?
        </Heading>
        <Button theme="primary" size="large" onClick={() => history.push('/people')}>
          GO TO CHARACTERS
          <Icon icon="arrow_right_alt" />
        </Button>
      </div>
    </div>
  );
};

export default WelcomePage;
