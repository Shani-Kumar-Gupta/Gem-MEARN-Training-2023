import React from 'react';
import RefsDemo from './components/LayoutComponent/RefsDemo';
// import ParentComp from './components/LayoutComponent/ParentComp';

function Layout() {
  return (
    <div className='layout__container'>
      Layout Container
      {/* <ParentComp /> */}
      <RefsDemo />
    </div>
  );
}

export default Layout;
