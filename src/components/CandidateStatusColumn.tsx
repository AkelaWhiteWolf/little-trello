import React from 'react';
import { Flex } from 'antd';
import { getCandidatesByStatus } from 'src/utils';
import { CandidateCard, ColumnStatusName } from 'src/components';
import styles from 'src/styles/CandidateStatusColumn.module.scss';

type Props = {
  order: number;
  name: string;
};

export const CandidateStatusColumn: React.FC<Props> = ({ order, name }) => {
  const candidatesOfThisColumn = getCandidatesByStatus(order);

  return (
    <Flex vertical>
      <ColumnStatusName name={name} />

      <Flex vertical gap="15px" className={styles['candidate-status-column']}>
        {candidatesOfThisColumn.map(({ candidate, employerStatusId }) => (
          <CandidateCard
            key={candidate.id}
            firstName={candidate.firstName}
            lastName={candidate.lastName}
            order={employerStatusId}
          />
        ))}
      </Flex>
    </Flex>
  );
};
