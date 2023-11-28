import { useEffect } from 'react';
import React from 'react';
import { CandidatesGrid, ChannelsChart } from 'src/components';
import { Spin } from 'antd';
import { useCandidatesStore, useChannelsStore } from 'src/store';

export const MainPage: React.FC = () => {
  const candidates = useCandidatesStore();
  const channels = useChannelsStore();

  useEffect(() => {
    candidates.getDataFromServer();
    channels.getDataFromServer();
  }, []);

  if (candidates.isLoading || channels.isLoading) {
    return <Spin size="large" />;
  }

  return (
    <>
      <CandidatesGrid />
      <ChannelsChart />
    </>
  );
};
