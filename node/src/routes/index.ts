import {Router} from 'express';
import cryptoRouter from './cryto.routes';
import sessionsRouter from './sessions.routes';

const router = Router();

router.use('/sessions',sessionsRouter);
router.use('/cryto/btc', cryptoRouter);


export default router;


