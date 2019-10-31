import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import Team from '../Team/Team';
import TeamPlayers from '../TeamPlayers/TeamPlayers';


function Login() {

    const useStateWithSessionStorage = sessionStorageKey => {
        const [value, setValue] = React.useState(
            sessionStorage.getItem(sessionStorageKey) || '');
        return [value, setValue];
    };

    const [value, setValue] = useStateWithSessionStorage('token');
    const [isError, setIsError] = useState(false);
    const [isAuthError, setIsAuthError] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [inputPassword, setInputPassword] = useState('');
    const [inputUser, setInputUser] = useState('');

    useEffect(() => {
        sessionStorage.setItem('token', value);
    }, [value]);

    const getToken = () => {
        const sendData = async () => {
            setIsAuthenticating(true);
            setIsError(false);
            setIsAuthError(false);
            try {
                const endpoint = 'http://localhost:5000/api/get_api_key';
                const data = {
                    username: inputUser,
                    password: inputPassword
                }
                const res = await axios.post(endpoint, data);
                console.log(res.data)
                if (res.data.api_key) {
                    setValue(res.data.api_key)
                } else {
                    setIsAuthError(true)
                }
            }
            catch (error) {
                console.error(error);
                setIsError(true)
            }
            setIsAuthenticating(false)
        }
        sendData();
    };

    const createAccount = () => {
        const sendData = async () => {
            setIsAuthenticating(true);
            setIsError(false);
            setIsAuthError(false);
            try {
                const endpoint = 'http://localhost:5000/api/create';
                const data = {
                    username: inputUser,
                    password: inputPassword
                }
                const res = await axios.post(endpoint, data);
                console.log(res.data)
                if (res.data.api_key) {
                    setValue(res.data.api_key)
                } else {
                    setIsAuthError(true)
                }
            }
            catch (error) {
                console.error(error);
                setIsError(true)
            }
            setIsAuthenticating(false)
        }
        sendData();
    };

    let contents = null
    if (value) {
        contents = (
            <div className="Login">
                <TeamPlayers />
                <br></br>
                <button onClick={e=> {setValue(null);}}>Log Out</button>
            </div>
        )
    } else {
        contents = (
            <div className="Login">
                {isAuthenticating ? (<p>Authenticating...</p>) : (<p>Authorized</p>)}
                {isAuthError && <p>Authenticathion Error</p>}

                <br/>
                <h3>Please Log In</h3>
                <form>
                    <input type="text" onChange={e=> {setInputUser(e.target.value)}} placeholder="Username" />
                    <input type="password" onChange={e => {setInputPassword(e.target.value)}} placeholder="Password" />
                    <button onClick={e => {getToken(); e.preventDefault();}}>Log In</button>
                    <button onClick={e => {createAccount(); e.preventDefault();}}>Create Account</button>
                </form>
                {isError && <h3>Processing Error</h3>}
                <button onClick={e => {setValue(null);}}>Log Out</button>
            </div>
        )
    }

    return (
        <div>{contents}</div>
    )


}

export default Login;