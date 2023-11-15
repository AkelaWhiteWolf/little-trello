import { createContext, useContext } from 'react';
import { rootStore } from 'src/store';

export const RootStoreContext = createContext<typeof rootStore | null>(null);

export const useStores = () => {
  const context = useContext(RootStoreContext);

  if (!context) {
    throw new Error('You forgot to use store context wrapper');
  }

  return context;
};
