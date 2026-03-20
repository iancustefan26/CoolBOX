import { createBrowserRouter } from 'react-router';
import Slideshow from './components/Slideshow';
import LandingPage from './pages/LandingPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Slideshow,
  },
  {
    path: '/landingpage',
    Component: LandingPage,
  },
], { basename: '/coolbox' });
