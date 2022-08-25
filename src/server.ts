import express,{Application} from 'express';
import dotenv from 'dotenv';
import routes from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger_docs';
import cors from 'cors';
dotenv.config();
const app:Application = express();
const port:number = Number(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(`/swagger-docs`,swaggerUi.serve,swaggerUi.setup(swaggerDocument, {explorer: true}));
app.listen(port,()=>{
    console.log("server started..",port);
})
