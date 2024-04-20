import { Octokit } from "octokit"; 

const token = "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";

export interface User{
  avatar_url: string;
  name: string | null;
  company:string | null;
  blog:string | null;
  bio:string | null;
  followers:number;
  following:number;
}

async function getUser(username) :  Promise<User> {

const octokit = new Octokit({
    auth: token,
  })
  
  const response  = await octokit.request('GET /users/{username}', {
    username: username,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

  return response.data;  
}

export {getUser};
