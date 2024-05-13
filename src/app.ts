import express from 'express';
import { Evns } from './config';
import { GithubController } from './presentation/github/controller';

(()=>{
main();
})();



async function main(){
    const app = express();
    const controller = new GithubController();

    app.use(express.json());

    app.post('/api/webhook',controller.webhookHandler);

    app.listen( Evns.PORT ,()=>{
        console.log(`Server on port ${Evns.PORT}`);
    });



}