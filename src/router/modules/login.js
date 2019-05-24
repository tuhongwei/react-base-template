import React from 'react';
const Login = React.lazy(() => import('@/pages/login/Login'));

export default [
  {
    path: '/login',
    name: 'Login',
    noDropdown: true, // 是否有下级菜单
    hidden: true, // 是否隐藏
    icon: '', // 图标
    component: Login
  }
];
