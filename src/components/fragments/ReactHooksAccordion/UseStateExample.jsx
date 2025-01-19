import { useState } from 'react';
import { Button } from '../../ui/button';
import { CodeBlock } from 'react-code-blocks';

export const UseStateExample = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count: {count}</p>
      <div className='flex gap-4'>
        <Button onClick={() => setCount(count - 1)}>Decrement</Button>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
      </div>
      <CodeBlock
        text={`import { useState } from 'react';
import { Button } from '../../ui/button';

export const UseStateExample = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count: {count}</p>
      <div className='flex gap-4'>
        <Button onClick={() => setCount(count - 1)}>Decrement</Button>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
      </div>
    </>
  );
};`}
        language={'jsx'}
        showLineNumbers={true}
      />
    </>
  );
};
