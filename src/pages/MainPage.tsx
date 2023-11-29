import React from 'react';
import { CandidatesGrid, ChannelsChart } from 'src/components';
import { Spin } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { useCandidatesStore, useChannelsStore } from 'src/store';

export const MainPage: React.FC = () => {
  const candidates = useCandidatesStore();
  const channels = useChannelsStore();

  const { isFetched: candidatesFetched } = useQuery({
    queryKey: ['candidates'],
    queryFn: candidates.getDataFromServer,
  });
  const { isFetched: channelsFetched } = useQuery({
    queryKey: ['channels'],
    queryFn: channels.getDataFromServer,
  });

  if (!candidatesFetched || !channelsFetched) {
    return <Spin size="large" />;
  }

  return (
    <>
      <CandidatesGrid />
      <ChannelsChart />
    </>
  );
};
