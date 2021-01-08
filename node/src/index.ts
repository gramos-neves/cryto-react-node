import express from 'express';
import Router from './routes';
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', Router);

app.use((req, res, next) => {
    res.status(404).json({
        "message": "Endpoint não encontrado"
    })
})

app.listen(3333, () => {
    console.log("listen port 3333")
})