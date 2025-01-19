import { postData } from '@/lib/axios';
import { queryClient } from '@/main';
import { Form, Formik } from 'formik';
import { useMutation } from 'react-query';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { ReactQueryRead } from './ReactQueryRead';
import { useState } from 'react';
import { CodeBlock } from 'react-code-blocks';

export const ReactQueryCreate = () => {
  const [apiResponse, setApiResponse] = useState();
  const { mutateAsync } = useMutation(
    async (data) => postData('/users', data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users');
      }
    }
  );

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          job: ''
        }}
        onSubmit={async (values, { resetForm }) => {
          const response = await mutateAsync(values);
          console.log('res: ', response);
          setApiResponse(response?.data);
          resetForm();
        }}
      >
        {({ handleSubmit, handleChange, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Input
              name='name'
              onChange={handleChange}
              value={values.name}
              placeholder='Name'
            />
            <Input
              name='job'
              onChange={handleChange}
              value={values.job}
              placeholder='Job'
            />
            <Button
              type='submit'
              disabled={isSubmitting}
              className='mt-4'
            >
              Submit
            </Button>
            <Button
              type='reset'
              className='mt-4'
            >
              Reset
            </Button>
          </Form>
        )}
      </Formik>

      <CodeBlock
        text={JSON.stringify(apiResponse, null, 2)}
        language='json'
      />
    </>
  );
};
