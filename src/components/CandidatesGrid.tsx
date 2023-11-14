import React from 'react';
import styles from 'src/styles/CandidatesGrid.module.scss';
import { COLUMNS_DATA } from 'src/data';
import { candidatesStore } from 'src/store';
import { CandidateStatusColumn } from 'src/components/CandidateStatusColumn';
import { Flex, Spin } from 'antd';
import { observer } from 'mobx-react-lite';

export const CandidatesGrid = observer(() => {
  if (candidatesStore.isLoading) {
    return <Spin size="large" />;
  }

  return (
    <Flex wrap="nowrap" align="stretch" className={styles['candidates-grid']}>
      {COLUMNS_DATA.map(({ order, name, id }) => (
        <CandidateStatusColumn key={id} order={order} name={name} />
      ))}
    </Flex>
  );
});
