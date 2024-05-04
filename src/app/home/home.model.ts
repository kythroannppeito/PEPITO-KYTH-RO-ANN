export class User{
   title: string;
   date: Date;
   actor: string;
   genre: string;
   id:string;

constructor (title: string = '', date: Date   = new Date(), id: string = '' , actor: string = '' , genre: string = ''){
      this.title = title;
      this.date = date;
      this.actor = actor;
      this.genre = genre;
      this.id =id;
}
}
export interface iUser{
   title: string;
   date: Date;
   actor: string;
   genre: string;
   id:string;
}
