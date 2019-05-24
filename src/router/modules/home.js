import React from 'react';
const Home = React.lazy(() => import('@/pages/Home'));

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
];
