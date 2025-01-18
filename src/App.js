import './App.scss';
import { BrowserRouter as Router, Navigate, Outlet, Route, Routes as Switch } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { Layout } from "components";
import { useSelector } from "react-redux";

import 'react-toastify/dist/ReactToastify.css';
import {globals, routes} from 'common';

const RequireAuth = () => {
  const isUserLoggedIn = useSelector(state => state.auth.isUserLoggedIn);

  return (
    isUserLoggedIn ? <Outlet/> : <Navigate to={routes.LOGIN}/>
  );
};


function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/' element={<Layout/>}>
            <Route element={<RequireAuth/>}>
              <Route path='*' element={<Navigate to='/'/>}/>
            </Route>
          </Route>
        </Switch>
      </Router>
      <ToastContainer autoClose={globals.TOAST_TIMER}/>
    </div>
  );
}

export default App;
