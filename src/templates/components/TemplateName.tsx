import React from 'react';
import { BaseAttributes } from '@interfaces/HtmlTypes';
import styles from './TemplateName.module.css';

type Props = {};

export const TemplateName: React.FC<TemplateNameProps> = ({ className, ...props }) => {
  React.useEffect(() => {
    console.log('Hello World!');
  }, []);

  return (
    <div className={styles.templateName__base} data-testid="TemplateName" {...props}>
      TemplateName works!
    </div>
  );
};

export type TemplateNameProps = React.PropsWithChildren<Props> & BaseAttributes<HTMLDivElement>;
