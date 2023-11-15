import { makeAutoObservable, observable, runInAction, action } from 'mobx';
import { ChannelsChartData, ChannelsData } from 'src/types';
import { candidatesStore } from 'src/store';

class ChannelsStore {
  data: ChannelsData[] = observable([]);
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getDataFromServer = async () => {
    this.isLoading = true;
    const response = await fetch(
      'https://650d558fa8b42265ec2c07b8.mockapi.io/kek/channels',
    );
    const responseJson = await response.json();
    runInAction(() => {
      this.data = responseJson;
      this.isLoading = false;
    });
  };

  @action
  getDataForChart = () => {
    if (!candidatesStore?.data || !this.data) {
      throw new Error('No channels or candidates data on Store!');
    } else {
      const result: ChannelsChartData[] = [];

      this.data.forEach(({ id, name }) => {
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
  };
}

export const channelsStore = new ChannelsStore();
