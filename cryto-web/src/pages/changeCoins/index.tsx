import React, { useEffect, useState } from 'react';
import { Container, ContainerBody, Back, Body } from './styles';
import { useHistory } from "react-router-dom";
import api from '../../service/api';
import { FaArrowLeft } from "react-icons/fa";


interface Currency {
    currency: string;
    value: number;
}

const Changecoins: React.FC = () => {
    const [selectCurrencies, setSelectCurrencies] = useState({} as any);
    const [currency, setCurrency] = useState<Currency>();
    const [newCurreny, setNewCurrency] = useState("");
    const history = useHistory();

    const [error,setError] = useState(false);



    useEffect(() => {

          //load token e validação
          async function validateToken() {
            const accessToken = localStorage.getItem("@cryto:token");
            if (!accessToken) {
                // eslint-disable-next-line
                history.push('/')
            }

        }

        async function seachCurrency() {
            await api.get('/cryto/btc/currency')
                .then(resp => {
                    setCurrency({currency:"BRL",value:resp.data.BRL})
                    setSelectCurrencies(resp.data)
                })
        }
        validateToken();
        seachCurrency();
    }, [])


    function handleBack() {
        // eslint-disable-next-line
        history.push('/dashboard')
    }

    function handleSelect(event: any) {
        const sigla = event.target.value;
        const currency = {
            currency: sigla,
            value: selectCurrencies[`${sigla}`]
        }

        setCurrency(currency)
    }


   async function  handleSalve() {

    if(!newCurreny){
        setError(true)
      }else{
          const data = {
            currency: currency?.currency,
            value: newCurreny
        }
       await api.post('/cryto/btc', data)
            history.push('/dashboard')
      }
       
    }


    function handleAlterInput(event: any){
         setError(false);
        setNewCurrency(event.target.value) 
    }


    return (
        <Container>
            <ContainerBody>
                <Back>
                    <button onClick={() => handleBack()} > 
                    <FaArrowLeft size={15}   /> 
                     Voltar</button>
                </Back>
                <Body isErrored={error} >
                    <strong>Moeda</strong>
                    <select value={currency?.currency}
                        onChange={(event) => handleSelect(event)} >
                        <option value="BRL">BRL</option>
                        <option value="EUR">EUR</option>
                        <option value="CAD">CAD</option>

                    </select>


                    <span>Valor Atual: {currency?.value}</span>
                    <strong>Novo Valor</strong>
                    <input required={true} type="number" min="0.1"  value={newCurreny} placeholder="5.500" onChange={(event) => handleAlterInput(event)} />
                    <button onClick={() => handleSalve()} >
                        Salvar
                       
                        </button>
                </Body>

            </ContainerBody>
        </Container>
    )
}


export default Changecoins;

