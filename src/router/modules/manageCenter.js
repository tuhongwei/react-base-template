import React from 'react';
const ManageCenter = React.lazy(() =>
  import('@/pages/manageCenter/ManageCenter')
);

export default [
  {
    path: '/manageCenter',
    component: ManageCenter
  }
];
