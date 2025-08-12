import React from "react";
import { FaUser, FaKey } from "react-icons/fa";
import { useState } from "react";
import "./Login.css";
import AutenticacaoService from "../../services/autenticacaoService";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const autenticacaoService = new AutenticacaoService();
    const [username, setUserName] = useState("");
    const [userpassword, SetUserPassword] = useState("");

    const handlerLogin = (event) => {
        event.preventDefault();
        login();
    };

    const navigate = useNavigate();

    const login = async ()=>{
        console.log(username,userpassword);
        const resposta = await autenticacaoService.login({email:username, senha:userpassword});
        console.log(resposta)
    
    }

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

                <div className="link-recover">
                    <a href="/recover">Forgot password?</a>
                </div>

                <button className="button-login" >Sign in</button>
                <a href="/register" className="link-signUp"><span style={{ color: "black" }}>New here? </span>Create an account</a>

            </form>
        </div>
    );
};

export default Login;
