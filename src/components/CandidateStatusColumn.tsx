import React, { DragEvent } from 'react';
import { observer } from 'mobx-react-lite';
import { Empty, Flex } from 'antd';
import { getCandidatesByStatus } from 'src/utils';
import { CandidateCard, ColumnStatusName } from 'src/components';
import styles from 'src/styles/CandidateStatusColumn.module.scss';
import { useStores } from 'src/contexts';

type Props = {
  order: number;
  name: string;
};

export const CandidateStatusColumn: React.FC<Props> = observer(
  ({ order, name }) => {
    const {
      candidates: { changeEmployerStatus },
    } = useStores();
    const candidatesOfThisColumn = getCandidatesByStatus(order);

    const onDrop = (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const id = Number(event.dataTransfer.getData('id'));

      changeEmployerStatus(id, order);
      // FIXME: better to save previous border
      event.currentTarget.style.border = '';
    };
    const onDragOver = (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.currentTarget.style.border = '1px solid lightblue';
    };
    const onDragLeave = (event: DragEvent<HTMLDivElement>) => {
      event.currentTarget.style.border = '';
    };

    return (
      <Flex vertical>
        <ColumnStatusName name={name} />

        <div
          className={styles['candidate-status-column']}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
        >
          {candidatesOfThisColumn.length ? (
            candidatesOfThisColumn.map(({ candidate, employerStatusId }) => (
              <CandidateCard
                key={candidate.id}
                id={candidate.id}
                firstName={candidate.firstName}
                lastName={candidate.lastName}
                order={employerStatusId}
              />
            ))
          ) : (
            <Empty />
          )}
        </div>
      </Flex>
    );
  },
);
