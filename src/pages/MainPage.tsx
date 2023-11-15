import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { CandidatesGrid, ChannelsChart } from 'src/components';
import { useStores } from 'src/contexts';

export const MainPage: React.FC = observer(() => {
  const { candidates, channels } = useStores();

  useEffect(() => {
    candidates.getDataFromServer();
    channels.getDataFromServer();
  }, []);

  return (
    <div>
      <CandidatesGrid />
      <ChannelsChart />
    </div>
  );
});
