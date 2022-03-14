import { QueryClientProvider, QueryClient } from 'react-query';
import HotelsPage from './pages/HotelsPage/HotelsPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HotelsPage />
    </QueryClientProvider>
  );
}

export default App;
