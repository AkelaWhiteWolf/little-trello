import { ChannelsChartData, ChannelsData } from 'src/types';
import { useCandidatesStore } from 'src/store';
import { create } from 'zustand';
import { API } from 'src/api';
interface State {
  data: ChannelsData[];
  isLoading: boolean;
}
interface Actions {
  getDataFromServer: () => void;
  getDataForChart: () => any[];
}

export const useChannelsStore = create<State & Actions>((set, get) => ({
  data: [],
  error: undefined,
  isLoading: false,
  async getDataFromServer() {
    set(() => ({ isLoading: true, check: false }));

    const { data: response, error } = await API.get(
      'https://650d558fa8b42265ec2c07b8.mockapi.io/kek/channels',
    );

    if (!error) set(() => ({ data: response, isLoading: false }));
  },

  getDataForChart() {
    const { data } = get();
    const candidatesStore = useCandidatesStore.getState();

    if (!candidatesStore.data || !data) {
      throw new Error('No channels or candidates data on Store!');
    } else {
      const result: ChannelsChartData[] = [];

      data.forEach(({ id, name }) => {
        result.push({ id, name, value: 0 });
      });
      candidatesStore.data.forEach(({ channelId }) => {
        const requiredChannel = result.find(({ id }) => id === channelId);

        if (requiredChannel) {
          requiredChannel.value++;
        } else {
          throw new Error('Candidate id does not match any channel');
        }
      });

      return result;
    }
  },
}));
