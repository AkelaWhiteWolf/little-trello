import React, { DragEvent } from 'react';
import styles from 'src/styles/CandidateCard.module.scss';

type Props = {
  firstName: string;
  lastName: string;
  order: string;
  id: number;
};

export const CandidateCard: React.FC<Props> = ({ firstName, lastName, id }) => {
  const fullName = `${firstName} ${lastName}`;

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('id', String(id));
  };
  const onDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      draggable
      className={styles['candidate-card']}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
    >
      {fullName}
    </div>
  );
};
