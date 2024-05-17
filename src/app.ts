import express from 'express';
import { Evns } from './config';
import { GithubController } from './presentation/github/controller';
import { GithubService } from './presentation/services/github.service';
import { GithubMiddleware } from './presentation/middlewares/github.middleware';

(()=>{
main();
})();



async function main(){
    const app = express();
    const service = new GithubService();
    const controller = new GithubController();

    app.use(express.json());

    app.use( GithubMiddleware.verifyToken );
    app.post('/api/webhook',controller.webhookHandler);

    app.listen( Evns.PORT ,()=>{
        console.log(`Server on port ${Evns.PORT}`);
    });



}