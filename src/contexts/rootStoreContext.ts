import { createContext, useContext } from 'react';
import { RootStore } from 'src/store';

export const RootStoreContext = createContext<RootStore | null>(null);

export const useStores = () => {
  const context = useContext(RootStoreContext);

  if (!context) {
    throw new Error('You forgot to use store context wrapper');
  }

  return context;
};
