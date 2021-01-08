import path from 'path';
import fs from 'fs';
import axios from 'axios';
import crytoView from '../view/cryto.view';

//Caminho do json
const currencies = path.resolve(__dirname, "..", 'database', 'currencies.json')


interface RequestChangeCoins {
    currency: String,
    value: number
}

interface RequestMessage {
    message: String
}

class Cryto {

    public async valuesCoins(): Promise<any> {
        const fileBuffer = fs.readFileSync(currencies, 'utf-8');
        const contentJson = JSON.parse(fileBuffer);

        const result = await (await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')).data
        const usd_rate_float = result.bpi.USD.rate_float;

        const BRL = crytoView.BRL(Number(contentJson.BRL), usd_rate_float);
        const EUR = crytoView.EUR(Number(contentJson.EUR), usd_rate_float);
        const CAD = crytoView.CAD(Number(contentJson.CAD), usd_rate_float);

        result.bpi.BRL = BRL
        result.bpi.EUR = EUR
        result.bpi.CAD = CAD

        return result

    }


    //altera valor das moedas
    public async changeCoins(data: RequestChangeCoins): Promise<RequestMessage> {
        //Ler arquivo json
        const { currency, value } = data;
        const fileBuffer = fs.readFileSync(currencies, 'utf-8');
        const contentJson = JSON.parse(fileBuffer);

        if (!contentJson[`${currency}`] || !currency) {
            throw new Error('Moeda inválida.')
        } else if (!value || value === 0) {
            throw new Error('Valor inválido.')
        }

        contentJson[`${currency}`] = String(value);

        //salvar arquivo json
        const contentString = JSON.stringify(contentJson);
        fs.writeFileSync(currencies, contentString);

        return {
            message: "Valor alterado com sucesso!"
        }
    }


    public async getCurrency(): Promise<RequestChangeCoins> {
        const fileBuffer = fs.readFileSync(currencies, 'utf-8');
        const contentJson = JSON.parse(fileBuffer);
        return contentJson
    }


}

export default Cryto