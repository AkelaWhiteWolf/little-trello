import React from 'react';
import { Flex, Typography } from 'antd';
import styles from 'src/styles/ColumnStatusName.module.scss';

const { Text } = Typography;

interface Props {
  name: string;
  count: number;
}

export const ColumnStatusName: React.FC<Props> = ({ name, count }) => {
  return (
    <Flex gap="10px" align="top" className={styles['container']}>
      <Text className={styles['name']}>{name}</Text>
      <Text keyboard className={styles['count']}>
        {count}
      </Text>
    </Flex>
  );
};
