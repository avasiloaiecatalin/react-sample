import { cn } from '@/lib/utils';

export const Container = ({
  children,
  className = '',
  fullWidth = false,
  hCenter = false,
  vCenter = false
}) => {
  return (
    <div className='w-full flex justify-center'>
      <div
        className={cn(
          fullWidth ? 'w-full' : 'w-3/4',
          'flex flex-col gap-4 p-2',
          hCenter ? 'justify-center' : '',
          vCenter ? 'items-center' : '',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
