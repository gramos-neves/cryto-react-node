import { convertePrecision, converteString } from '../util/converter';


export default {
    BRL(brl: number, usd_rate_float: number) {
        return {
            code: "BRL",
            rate: converteString(brl * usd_rate_float),
            description: "Brazilian Real",
            rate_float: Number(convertePrecision(brl * usd_rate_float))
        }
    },
    EUR(EUR: number, usd_rate_float: number) {
        return {
            code: "EUR",
            rate: converteString(EUR * usd_rate_float),
            description: "Euro",
            rate_float: Number(convertePrecision(EUR * usd_rate_float))
        }

    },
    CAD(CAD: number, usd_rate_float: number) {
        return {
            code: "CAD",
            rate: converteString(CAD * usd_rate_float),
            description: "Canadian Dollar",
            rate_float: Number(convertePrecision(CAD * usd_rate_float))
        }

    }
}