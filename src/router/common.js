import React from 'react';
const NoPermission = React.lazy(() => import('@/pages/common/NoPermission'));
const NotFound = React.lazy(() => import('@/pages/common/404'));
const ServiceUnavailable = React.lazy(() =>
  import('@/pages/common/ServiceUnavailable')
);

export default [
  {
    path: '/index',
    redirect: '/',
    hidden: true
  },
  // 无权限页面
  {
    path: 'nopermission',
    name: 'nopermission',
    component: NoPermission
  },
  // 404
  {
    path: '*',
    name: 'lost',
    component: NotFound
  },
  // 503
  {
    path: '/ServiceUnavailable',
    name: 'serviceUnavailable',
    component: ServiceUnavailable
  }
];
