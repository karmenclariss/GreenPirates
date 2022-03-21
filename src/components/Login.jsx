import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '117544908001-7f5kmi4cov63hdfugrhitc7prub2nrer.apps.googleusercontent.com' ;

function Login(){
    const onSuccess = (res) => {
        console.log(' [Login Success] currentUser:', res.profileobj);
    };
    const onFailure = (res) => {
        console.log(' [Login failed] res:', res);
    };
    return (
    <div>
        <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
        />
    </div>
    );
};

export default Login;