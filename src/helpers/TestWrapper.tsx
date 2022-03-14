import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

interface TestsWrapperProps {
  children: ReactElement;
}

const TestWrapper = ({ children }: TestsWrapperProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default TestWrapper;
