import Avatar from 'react-avatar';

export const UserAvatar = ({ email, image, firstName, lastName }) => {
  return (
    <div className='flex flex-col items-center'>
      <Avatar
        name={email}
        size='50'
        round={true}
        src={image}
      />
      <p>
        {firstName} {lastName}
      </p>
    </div>
  );
};
