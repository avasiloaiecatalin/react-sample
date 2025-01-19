import { CodeBlock } from 'react-code-blocks';
import { Container } from './components/ui/container';

export const AxiosAndRQSetup = () => {
  return (
    <Container>
      <h1>Axios Setup</h1>
      <p>Fisier pentru clientul Axios cu configuratia de baza:</p>
      <CodeBlock
        language='jsx'
        text={`import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getData = async (url) => {
  const res = await axiosClient.get(url);
  return res.data;
};`}
      />

      <h1>React Query Setup</h1>
      <p>In fisierul main.jsx, se incarca React Query:</p>
      <CodeBlock
        language='jsx'
        text={`const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    { ... }
  </QueryClientProvider>
);
`}
      />
    </Container>
  );
};
