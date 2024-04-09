import PropTypes from 'prop-types';
import { createContext } from 'react';

export const AuthContest = createContext(null)

const AuthProviders = ({children}) => {
  return (
    <AuthContest.Provider>
      {children}
    </AuthContest.Provider>
  );
};

export default AuthProviders;

AuthProviders.propTypes = {
  children: PropTypes.node,
}