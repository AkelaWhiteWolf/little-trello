import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { CandidatesGrid, ChannelsChart } from 'src/components';
import { useStores } from 'src/contexts';
import { Spin } from 'antd';

export const MainPage: React.FC = observer(() => {
  const { candidates, channels } = useStores();

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
});
