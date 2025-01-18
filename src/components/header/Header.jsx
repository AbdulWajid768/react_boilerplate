import React, { useEffect } from 'react';
import 'components/header/_header.scss';
import { routes } from "common";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authExtraActions } from "reduxStore/actions";
import { useGoogleLogin } from "@react-oauth/google";
import { authActions } from "reduxStore/reducers/authSlice";
import { generalActions } from "reduxStore/reducers/generalSlice";
import { IconGoogle } from "assets/icons";
import { toast } from "react-toastify";

function Header() {
  const dispatch = useDispatch();
  const location = useLocation();
  const {user, isUserLoggedIn} = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(generalActions.resetData())
  }, [location]);

  return (
    <header>
      <div className="content-wrapper">
        <div className="content">
          <div className="logo">
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
