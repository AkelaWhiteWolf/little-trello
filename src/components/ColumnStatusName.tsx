import React from 'react';
import { Typography } from 'antd';
import styles from 'src/styles/ColumnStatusName.module.scss';

const { Title } = Typography;

type Props = {
  name: string;
};

export const ColumnStatusName: React.FC<Props> = ({ name }) => {
  return (
    <Title level={5} className={styles['column-status-name']}>
      {name}
    </Title>
  );
};
