import { makeAutoObservable, runInAction } from 'mobx';
import { ChannelsData } from 'src/types';

class ChannelsStore {
  data: ChannelsData[] = [];
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
}

export const channelsStore = new ChannelsStore();
