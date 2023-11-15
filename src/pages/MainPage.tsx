import { observer } from 'mobx-react-lite';
import React from 'react';
import { CandidatesGrid, ChannelsChart } from 'src/components';

export const MainPage: React.FC = observer(() => {
  return (
    <div>
      <CandidatesGrid />
      <ChannelsChart />
    </div>
  );
});
