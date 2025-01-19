import { Container } from './components/ui/container';
import { CodeBlock } from 'react-code-blocks';
import { ReactQueryRead } from './components/fragments/ReactQueryRead';

export const ReadPage = () => {
  return (
    <Container>
      <h1>ReadPage</h1>
      <ReactQueryRead />
      <h4>Response as JSON</h4>
      <CodeBlock
        text={`{"page":1,"per_page":6,"total":12,"total_pages":2,"data":[{"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/6-image.jpg"}],"support":{"url":"https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral","text":"Tired of writing endless social media content? Let Content Caddy generate it for you."}}`}
        language='json'
      />
      <h4>React Query call inside a component</h4>
      <CodeBlock
        language='jsx'
        text={`import { getData } from '@/lib/axios';
import { useQuery } from 'react-query';
import { Skeleton } from '../ui/skeleton';
import { UserAvatar } from '../ui/UserAvatar';

export const ReactQueryRead = () => {
  const {
    data: users,
    isLoading,
    isError
  } = useQuery('users', () => getData('/users'));

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <>error</>;
  }

  return (
    <>
      <h4>Styled response</h4>
      <ul className='flex gap-2'>
        {users.data.map((user) => (
          <UserAvatar
            key={user.id}
            email={user.email}
            image={user.avatar}
            firstName={user.first_name}
            lastName={user.last_name}
          />
        ))}
      </ul>
    </>
  );
};
`}
      />
    </Container>
  );
};
