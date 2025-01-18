import React from 'react';
import { Footer, Header, Loader } from 'components';
import { Outlet } from 'react-router-dom'
import 'components/layout/_layout.scss';
import { useSelector } from "react-redux";

function Layout() {
  const {loading} = useSelector(state => state.auth);

  return (<div className={'page-container'}>
    <Header/>
    <main>
      {loading && < Loader/>}
      <Outlet/>
    </main>
    <Footer/>
  </div>);
}

export default Layout;