import React from 'react';
import RefsDemo from './components/LayoutComponent/RefsDemo';
import FocusInputRef from './components/LayoutComponent/FocusInputRef';
// import ParentComp from './components/LayoutComponent/ParentComp';

function Layout() {
  return (
    <div className='layout__container'>
      Layout Container
      {/* <ParentComp /> */}
      <RefsDemo />
      <FocusInputRef />
    </div>
  );
}

export default Layout;
