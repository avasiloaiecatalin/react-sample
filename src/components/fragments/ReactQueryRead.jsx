import { getData } from '@/lib/axios';
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
