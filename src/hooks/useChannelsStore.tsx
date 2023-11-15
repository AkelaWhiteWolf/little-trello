import { useStores } from 'src/contexts';
import { getDataFirstTime } from 'src/utils';

export const useChannels = () => {
  const { channels } = useStores();

  function getChannelsFromServerFirstTime() {
    getDataFirstTime({
      data: channels.data,
      isLoading: channels.isLoading,
      getDataFunction: channels.getDataFromServer,
    });
  }

  return { getChannelsFromServerFirstTime };
};
