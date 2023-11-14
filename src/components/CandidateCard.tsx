import React, { DragEvent } from 'react';
import { СandidateCardData } from 'src/types';
import styles from 'src/styles/CandidateCard.module.scss';

type Props = {
  cardData: СandidateCardData;
};

export const CandidateCard: React.FC<Props> = ({
  cardData: {
    candidate: { firstName, lastName, id },
  },
}) => {
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
