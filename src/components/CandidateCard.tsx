import React, { DragEvent } from 'react';
import { Avatar, Flex, Typography } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { СandidateCardData } from 'src/types';
import styles from 'src/styles/CandidateCard.module.scss';
import { getFirstLettersOfFullname } from 'src/utils';

dayjs.extend(relativeTime);

interface Props {
  cardData: СandidateCardData;
}

export const CandidateCard: React.FC<Props> = ({
  cardData: {
    createdAt,
    adChannel,
    candidate: { firstName, lastName, id, color },
  },
}) => {
  const avatarLabel = getFirstLettersOfFullname(`${firstName} ${lastName}`);
  const createdTimeAgo = dayjs().to(dayjs(createdAt));

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
      <Flex justify="space-between" align="center" className={styles['bottom']}>
        <Typography.Text type="success" strong>
          {adChannel}
        </Typography.Text>
        <Flex gap="10px" align="center">
          <ClockCircleOutlined />
          <Typography.Text>{createdTimeAgo}</Typography.Text>
        </Flex>
      </Flex>
    </div>
  );
};
