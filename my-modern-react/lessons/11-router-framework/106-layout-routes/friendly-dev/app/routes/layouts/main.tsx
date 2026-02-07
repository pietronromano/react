import { Outlet } from 'react-router';
import Hero from '~/components/Hero';

// MainLayout component  include  only an Outlet for nested routes, doesn't have the Hero component
const MainLayout = () => {
  return (
    <section className='max-w-6xl mx-auto px-6 my-8'>
      <Outlet />
    </section>
  );
};

export default MainLayout;