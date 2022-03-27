import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = '858483949458-3jg43uscn0isammqoqahek7jk6rvdf09.apps.googleusercontent.com';

function Login(){

    const[showLoginButton, setShowLoginButton]= useState(true);
    const[showLogoutButton, setShowLogoutButton] = useState(false);

    const onLoginSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
        setShowLoginButton(false);
        setShowLogoutButton(true);
    };
    const onLoginFailure = (res) => {
        console.log('[Login failed] res:', res);
    };
    const onLogoutSuccess = () => {
        alert('Logout made successfully!');
        setShowLoginButton(true);
        setShowLogoutButton(false);
    };
    
    return (
        <div>
            { showLoginButton ?
                <GoogleLogin
                    disabled={false}
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host origin'}
                    style={{ marginTop: '100px' }}
                    isSignedIn={true}
                /> : null
            }

            { showLogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Logout"
                    onLogoutSuccess={onLogoutSuccess}
                >
                </GoogleLogout> : null
            } 
        </div>

    );
};

export default Login;