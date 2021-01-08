import React, { useEffect, useState } from 'react';
import { Container, ContainerBody, ContainerValue } from './styles';
import { useHistory } from "react-router-dom";
import api from '../../service/api';

interface RequestCrypto {
    bpi: {
        USD: { rate: string }
        BRL: { rate: string }
        CAD: { rate: string }
        EUR: { rate: string }

    }
}


const Dashboard: React.FC = () => {
    const [cryto, setCryto] = useState<RequestCrypto>()
    const history = useHistory();

    useEffect(() => {

        //load token e validação
        async function validateToken() {
            const accessToken = localStorage.getItem("@cryto:token");
            if (!accessToken) {
                // eslint-disable-next-line
                history.push('/')
            }

        }

        async function initCryto() {
            await api.get('/cryto/btc/')
                .then(resp => {
                    console.log(resp.data)
                    setCryto(resp.data)
                })
        }

        validateToken();
        initCryto();

    }, [])


    return (
        <Container>
            <ContainerBody>
                <button onClick={() => history.push('/changeCoins')}>Atualizar o valor monetário</button>
                <div className="btc">
                    <strong>BTC</strong>
                    <div>1</div>
                </div>

                {!cryto ?
                    (<div>loading...</div>) :
                    (
                        <ContainerValue>
                            <div className="USDBR">
                                <strong>USD</strong>
                                <div>{cryto?.bpi.USD.rate}</div>
                            </div>
                            <div className="USDBR">
                                <strong>BRL</strong>
                                <div>{cryto?.bpi.BRL.rate}</div>
                            </div>
                            <div className="USDBR">
                                <strong>EUR</strong>
                                <div>{cryto?.bpi.EUR.rate}</div>
                            </div>
                            <div className="USDBR">
                                <strong>CAD</strong>
                                <div>{cryto?.bpi.CAD.rate}</div>
                            </div>
                        </ContainerValue>
                    )}


            </ContainerBody>
        </Container>
    )
}



export default Dashboard;

