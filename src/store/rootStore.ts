import { candidatesStore, channelsStore } from 'src/store';

class RootStore {
  candidates = candidatesStore;
  channels = channelsStore;
}

export const rootStore = new RootStore();
