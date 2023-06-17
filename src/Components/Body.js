import React from 'react'
import Sidebar from './Sidebar';
// import MainContainer from './MainContainer';
// import WatchPage from './WatchPage';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
  <div className="flex flex-row">
    <Sidebar/>
    {/* <MainContainer/>
    <WatchPage/> */}
    <Outlet/>
    </div>
  )
}

export default Body