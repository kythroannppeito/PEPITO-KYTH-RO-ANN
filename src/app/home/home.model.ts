export class User{
   title: string;
   date: Date;
   id:string;

constructor (title: string = '', date: Date   = new Date(), id: string = ''){
      this.title = title;
      this.date = date;
      this.id =id;


}

}

export interface iUser{
    title: string;
    date: Date;
    id:string;
}
