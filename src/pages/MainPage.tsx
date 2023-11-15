import { observer } from 'mobx-react-lite';
import React from 'react';
import { CandidatesGrid } from 'src/components';

export const MainPage: React.FC = observer(() => {
  return (
    <div>
      <CandidatesGrid />
    </div>
  );
});
