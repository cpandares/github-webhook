import { Request, Response } from "express";



export class GithubController {


    constructor(){}


    webhookHandler(req:Request,res:Response){

        const gitHubEvent = req.headers['x-github-event'] ?? 'unknown';
        const signature = req.headers['x-hub-signature-256'] ?? 'unknown';
        const payload = req.body;

        console.log(gitHubEvent)
        res.status(200).json({message:'ok'});

    }


}