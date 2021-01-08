import React, { useState } from 'react';
import api from '../../service/api';
import {useHistory} from 'react-router-dom';
import { Container, ContainerLogin,Button } from './styles';
import { FaHome } from "react-icons/fa";

const Login: React.FC = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const history = useHistory();

    function handleLogin() {
        const data = { email, password };

        api.post("sessions", data).then((resp) => {
            localStorage.setItem("@cryto:token", resp.data.token);
            history.push('/dashboard');
        });
    }

    return (
        <Container>
            <ContainerLogin>
                <strong>Email</strong>
                <input value={email} onChange={(event) => setEmail(event.target.value)} />
                <strong>Senha</strong>

                <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" />
                <Button onClick={handleLogin} > 
                   <FaHome   />
                    Entrar
                </Button>
            </ContainerLogin>
        </Container>
    )
}



export default Login;

