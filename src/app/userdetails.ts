export class UserDetails {
   public repoList:boolean;
   constructor(
      public name:string, 
      public avatar_url: string, 
      public public_repos:number,
      public html_url:string
   ){
      this.repoList=false;
   }
}