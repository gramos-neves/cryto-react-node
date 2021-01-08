import { Response, Router, Request } from 'express';
import CrytoService from '../service/CrytoService';

const crytoRouter = Router();

crytoRouter.get('/', async (request: Request, response: Response) => {

    try {
        const crytoService = new CrytoService();
        const crytos = await crytoService.valuesCoins();

        response.status(201).json(crytos);
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }

})


crytoRouter.post('/', async (request: Request, response: Response) => {

    try {
        const data = request.body;
        const crytoService = new CrytoService()
        const message = await crytoService.changeCoins(data);

        response.status(201).json(message);
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }

})


crytoRouter.get('/currency', async (request: Request, response: Response) => {
    try {

        const crytoService = new CrytoService()
        const currencies = await crytoService.getCurrency();
        response.status(201).json(currencies);
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }
})

export default crytoRouter;