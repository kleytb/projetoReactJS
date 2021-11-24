
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { register } from "../../actions/userActions";
import LoadingBox from "../../components/LoadingBox";



export default function RegisterScreen(props){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const redirect = props.location.search? props.location.search.split('=') [1] : '/';

    const userRegister = useSelector((state) => state.userRegister);
    const {userInfo} = userRegister;


    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert('As senhas não estão iguais')
        } else {
            dispatch(register(name, email, password));
        }
        
    };
    useEffect(() => {
        if(userInfo){
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);

    return (
        <div>
            <form className='form' onSubmit={submitHandler}>
                <div>
                    <h1>Cadastro</h1>
                </div>
                
                <div>
                    <label htmlFor='name'>Nome</label>
                    <input type='text' id='name' placeholder='Nome' required
                        onChange={e=> setName(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' placeholder='Email' required
                        onChange={e=> setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='password'>Senha</label>
                    <input type='password' id='password' placeholder='Senha' required
                        onChange={e=> setPassword(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor='confirmPassword'>Confirme sua Senha</label>
                    <input type='password' id='confirmPassword' placeholder='Confirme sua senha' required
                        onChange={e=> setConfirmPassword(e.target.value)}></input>
                </div>
                <div>
                    <label />
                    <button className='primary' type='submit'>Cadastre-se</button>

                </div>
                <div>
                    <label />
                    <div>
                        Já possui uma conta? {' '}
                        <Link to='/signin'>Sign In</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}