/*
To create a link to a route in React Router, we use the `Link` component. 
This component is similar to an anchor tag, but it does not cause a full page reload. 
Instead, it updates the URL and renders the new route. 
This is what makes it so fast and efficient.
*/

import { Link } from 'react-router';

const Header = () => {
  return (
    <div className='top-nav'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </div>
  );
};

export default Header;