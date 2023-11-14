import { MainPage } from 'src/pages';
import { RootStore } from 'src/store';
import { RootStoreContext } from 'src/contexts';
import './global-styles.scss?inline';

const App = () => {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <MainPage />
    </RootStoreContext.Provider>
  );
};

export default App;
