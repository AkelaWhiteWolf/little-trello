import { useStores } from 'src/contexts';
import { getDataFirstTime } from 'src/utils';

export const useCandidates = () => {
  const { candidates } = useStores();

  function getCandidatesFromServerFirstTime() {
    getDataFirstTime({
      data: candidates.data,
      isLoading: candidates.isLoading,
      getDataFunction: candidates.getDataFromServer,
    });
  }

  return { getCandidatesFromServerFirstTime };
};
