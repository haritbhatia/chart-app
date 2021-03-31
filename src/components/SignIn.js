import React, { useContext, useState } from "react";
import '../App.css';
import logo from '../logo.svg';
import ChartApp from './ChartApp';
import { context } from '../context/context';
import API from '../apis/apis';

function SignIn() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);
    let { setAuthToken } = useContext(context);
    const signIn = async () => {
        // APi Call
        setIsLoading(true);
        let res = await API.signIn();
        if (res && res.statusCode && Number(res.statusCode) === 200) {
            setAuthToken(res.token);
            setIsLoading(false);
            setIsSignedIn(true);
        }
        else {
            setIsLoading(false);
            setError(true);
        }
    }

    if (isSignedIn) {
        // return Table Component
        return (<ChartApp />);
    }
    else if (error) {
        return (<div>Error is there.</div>);
    }
    else if (isLoading) {
        // Loader
        return (<div><img src={logo} className="App-logo" alt="logo" /></div>);
    }
    else {
        return (
            <div>
                <button className="sign_in" onClick={signIn}>Sign In</button>
            </div>
        );
    }
}

export default SignIn;