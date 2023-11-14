import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { MainPage } from 'src/pages';
import { candidatesStore } from 'src/store';
import './global-styles.scss?inline';

const { getDataFromServer } = candidatesStore;

const App = observer(() => {
  useEffect(() => {
    getDataFromServer();
  }, []);

  return <MainPage />;
});

export default App;
