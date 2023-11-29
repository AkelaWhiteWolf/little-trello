import { MainPage } from 'src/pages';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import './global-styles.scss?inline';

const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <MainPage />
    </QueryClientProvider>
  );
};

export default App;
