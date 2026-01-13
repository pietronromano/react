// The Outlet component is used to render the child routes of the layout route.
import { Outlet } from 'react-router';

// Let's remove the Hero component from the home page and add it to the HomeLayout component. 
// This way, the Hero component will be rendered in the home layout.
import Hero from '~/components/Hero';

// HomeLayout component that includes the Hero and an Outlet for nested routes
const HomeLayout = () => {
  return (
    <>
      <Hero name='Friendly Dev'/>
      <section className='max-w-6xl mx-auto px-6 my-8'>
        <Outlet />
      </section>
    </>
  );
};
 
export default HomeLayout;