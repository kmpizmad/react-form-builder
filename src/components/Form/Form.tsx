import React from 'react';
import { BaseAttributes } from '@interfaces/HtmlTypes';
import styles from './Form.module.css';

type Props = {};

export const Form: React.FC<FormProps> = props => {
  React.useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div className={styles.form__base} data-testid="Form">
      Form works!
    </div>
  );
};

export type FormProps = React.PropsWithChildren<Props> & BaseAttributes<HTMLDivElement>;
