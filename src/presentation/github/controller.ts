import { Request, Response } from "express";
import { GithubService } from "../services/github.service";



export class GithubController {


    constructor(
        private readonly githubService = new GithubService(),
    ){}


    webhookHandler= (req:Request,res:Response) => {

        const gitHubEvent = req.headers['x-github-event'] ?? 'unknown';
        const signature = req.headers['x-hub-signature-256'] ?? 'unknown';
        const payload = req.body;
        let message = '';
        
        
        switch(gitHubEvent){
            case 'star':
               message = this.githubService.onStar( payload );
                break;
            case 'issues':
              message = this.githubService.onIssue(payload);
                break;

            default:
               message = (`Unknown event ${gitHubEvent}`);
        }

        console.log({message})
        res.status(202).json({message:'ok'});

    }


}