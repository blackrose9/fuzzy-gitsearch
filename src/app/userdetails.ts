export class UserDetails {
   constructor(
   public username:string,
   public profilepic:string,
   public repos:{
      reponame:string;
      repolink:string;
   }
   ){}
   
   
}