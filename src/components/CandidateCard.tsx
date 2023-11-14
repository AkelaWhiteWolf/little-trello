import React, { DragEvent } from 'react';
import { Avatar, Flex, Typography } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { СandidateCardData } from 'src/types';
import styles from 'src/styles/CandidateCard.module.scss';
import { getFirstLettersOfFullname, getTimeDifference } from 'src/utils';

type Props = {
  cardData: СandidateCardData;
};

export const CandidateCard: React.FC<Props> = ({
  cardData: {
    createdAt,
    candidate: { firstName, lastName, id, color },
  },
}) => {
  const avatarLabel = getFirstLettersOfFullname(`${firstName} ${lastName}`);
  const createdTimeAgo = getTimeDifference(dayjs(createdAt));

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
      <Flex align="center" gap="15px" className={styles['top']}>
        <Avatar style={{ background: color }}>{avatarLabel}</Avatar>

        <Typography.Title level={5} className={styles['full-name']}>
          {firstName}
          <br />
          {lastName}
        </Typography.Title>
      </Flex>
      <Flex justify="space-between" className={styles['bottom']}>
        <Flex gap="10px" align="center">
          <ClockCircleOutlined />
          <Typography.Text>{createdTimeAgo} ago</Typography.Text>
        </Flex>
      </Flex>
    </div>
  );
};
