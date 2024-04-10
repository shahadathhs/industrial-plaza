import { useContext } from 'react';
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContest } from '../Providers/AuthProviders';

const PrivateRoot = ({children}) => {
  const {user, loading} = useContext(AuthContest);
  const location = useLocation();

  if(loading){
    return <span className="loading loading-bars loading-lg"></span>
  }

  if (user) {
    return children;
  } return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoot;

PrivateRoot.propTypes = {
  children: PropTypes.node,
}