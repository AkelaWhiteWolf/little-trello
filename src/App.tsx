import { MainPage } from 'src/pages';
import { rootStore } from 'src/store';
import { RootStoreContext } from 'src/contexts';
import './global-styles.scss?inline';

const App = () => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      <MainPage />
    </RootStoreContext.Provider>
  );
};

export default App;
