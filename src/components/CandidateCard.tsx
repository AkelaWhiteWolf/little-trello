import React from 'react';
import styles from 'src/styles/CandidateCard.module.scss';

type Props = {
  firstName: string;
  lastName: string;
  order: string;
};

export const CandidateCard: React.FC<Props> = ({
  firstName,
  lastName,
  order,
}) => {
  const fullName = `${firstName} ${lastName}`;

  return <div className={styles['candidate-card']}>{fullName}</div>;
};
