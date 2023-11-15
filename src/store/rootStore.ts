import { candidatesStore } from 'src/store';

class RootStore {
  candidates = candidatesStore;
}

export const rootStore = new RootStore();
