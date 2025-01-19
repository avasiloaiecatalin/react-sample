import './App.css';
import { Container } from './components/ui/container';

function App() {
  return (
    <Container
      hCenter
      vCenter
    >
      <div className='text-4xl'>👋</div>
      <p className='text-2xl text-center'>
        Use the navigation bar to navigate between pages.
      </p>
    </Container>
  );
}

export default App;
