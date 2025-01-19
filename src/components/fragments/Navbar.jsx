import { Link } from 'react-router';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '../ui/navigation-menu';
import { HomeIcon } from 'lucide-react';

export const Navbar = () => {
  return (
    <div className='flex justify-center items-center my-2'>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to='/'>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <HomeIcon />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to='/react-hooks'>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                React hooks
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to='/axios-rq-setup'>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Axios & React Query Setup
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to='/create'>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Create
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to='/read'>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Read
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/docs'>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Update
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href='/docs'>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Delete
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
