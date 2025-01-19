import './App.css';
import { ReactHooksAccordion } from './components/fragments/ReactHooksAccordion/ReactHooksAccordion';
import { Container } from './components/ui/container';

function ReactHooksPage() {
  return (
    <Container>
      <h3 className='text-4xl'>🪝 React Hooks</h3>
      <ReactHooksAccordion />
    </Container>
  );
}

export default ReactHooksPage;
