import React from 'react';
import cx from 'classnames';
import { useHistory } from 'react-router-dom';
import { Heading, Label, Strong, Icon } from 'luar-components';

import styles from './styles.module.scss';

const CharacterHeader = ({ characterInfo }) => {
  const history = useHistory();
  return (
    <div className={cx(styles.characterHeader)}>
      <div>
        <button onClick={() => history.goBack()}>
          <Icon icon="keyboard_backspace" />
        </button>
      </div>
      <div>
        <Heading as="h3">{characterInfo.name}</Heading>
        <Label>
          BORN DATE <Strong>{characterInfo.birth_year}</Strong>
        </Label>
      </div>
    </div>
  );
};

export default CharacterHeader;
