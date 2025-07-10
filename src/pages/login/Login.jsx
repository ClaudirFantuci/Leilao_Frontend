import React from "react";
import { FaUser, FaKey } from "react-icons/fa";
import { useState } from "react";
import "./Login.css";
const Login = () => {
    const [username, setUserName] = useState("");
    const [userpassword, SetUserPassword] = useState("");

    const handlerLogin = (event) => {
        event.preventDefault();
        console.log("teste", username, userpassword)
    };

    return (
        <div className="container-login">
            <form onSubmit={handlerLogin}>
                <h1>Hello</h1>
                <p>It's great to have you here</p>
                <div className="input-field">
                    <input type="email"
                        placeholder="user"
                        value={username}
                        onChange={(e) => (setUserName(e.target.value))} />
                    <FaUser className="icon" />
                </div>

                <div className="input-field">
                    <input type="password"
                        placeholder="password"
                        value={userpassword}
                        onChange={(e) => (SetUserPassword(e.target.value))} />
                    <FaKey className="icon" />
                </div>

                <button className="button-login">Sign in</button>
                <a href="" className="link-signUp">New here? Create an account</a> {/*adicionar link */}
            </form>
        </div>
    );
};

export default Login;
