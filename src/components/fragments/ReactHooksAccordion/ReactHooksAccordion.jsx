import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../../ui/accordion';
import { EffectVsState } from './EffectVsState';
import { UseEffectExample } from './UseEffectExample';
import { UseStateExample } from './UseStateExample';
import { Link } from 'react-router';

export const ReactHooksAccordion = () => {
  return (
    <Accordion
      type='single'
      collapsible
      className='w-full'
    >
      <AccordionItem value='item-1'>
        <AccordionTrigger>useState</AccordionTrigger>
        <AccordionContent>
          <UseStateExample />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>useEffect</AccordionTrigger>
        <AccordionContent>
          <UseEffectExample />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>useState vs. useEffect</AccordionTrigger>
        <AccordionContent>
          <EffectVsState />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-4'>
        <AccordionTrigger>Other React hooks</AccordionTrigger>
        <AccordionContent>
          <Button>
            <Link
              to='https://daily.dev/blog/react-hooks-explained-simply'
              target='_blank'
            >
              React hooks explained simply
            </Link>
          </Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
