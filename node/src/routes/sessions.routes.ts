import { Router, Request, Response } from 'express';
import AuthenticateuserService from '../service/AuthenticateUserService';


const sessionsRouter = Router();

sessionsRouter.post('/', async (request: Request, response: Response) => {
    try {
        const authenticateuserService = new AuthenticateuserService();
        const data = request.body;
        const { token } = await authenticateuserService.validationSession(data);
        response.status(200).json({ token });
    } catch (error) {
        return response.status(400).json({ error: error.message })
    }

})



export default sessionsRouter;