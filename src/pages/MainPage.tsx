import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { CandidatesGrid } from 'src/components';
import { useStores } from 'src/contexts';

export const MainPage: React.FC = observer(() => {
  const {
    candidates: { getDataFromServer },
  } = useStores();
  useEffect(() => {
    getDataFromServer();
  }, []);

  return (
    <div>
      <CandidatesGrid />
    </div>
  );
});
