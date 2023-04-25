import {useAuth0} from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button onClick={() => loginWithRedirect({ 
        redirectUri: 'http://127.0.0.1:5500/Inicio.html#' 
      })}
    >
      Login
    </button>
  );
};

export default LoginButton;