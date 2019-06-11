import React from 'react';
const About = React.lazy(() => import('@/pages/About'));

export default [
  {
    path: '/about',
    name: 'About',
    component: About
  }
];
