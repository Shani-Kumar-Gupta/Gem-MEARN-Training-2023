import React from 'react';
import ParentComp from './components/LayoutComponent/ParentComp';

function Layout() {
  return (
    <div className='layout__container'>
      Layout Container
      <ParentComp />
    </div>
  );
}

export default Layout;
