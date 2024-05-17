import { GitHubStarPayload, GithubIssuePayload } from "../../interfaces";

export class GithubService {




    constructor() { }


    onStar( payload: GitHubStarPayload ):string {


        let message:string = '';

        const { starred_at,sender, repository, action } = payload;

         if(starred_at){
            message = `User ${sender.login}  star on ${repository} Starred at ${starred_at}`;
        }else
        {
            message = `User ${sender.login} remove star on ${repository} action ${action}`;
        }

        return message;
    }


    onIssue( payload:GithubIssuePayload ):string{
        let message : string = '';

        const { action, issue, repository, sender } = payload;

       

        if(action === 'opened'){
           return message = `User ${sender.login} open issue ${issue.title} on repository ${repository.name}`;
        }else if(action === 'closed'){
            return  message = `User ${sender.login} close issue ${issue.title} on repository ${repository.name}`;
        }
        else if(action === 'reopened'){
            return  message = `User ${sender.login} reopen issue ${issue.title} on repository ${repository.name}`;
        }else{
            return message = `Unknown action ${action}`;
        }



    }


}


