export class Client {
    id: number;
    name:String;
    age:number;
    weight: number;
    height: number;
    hair_color:String;
    professions: any[];
    friends: any[];

    getFriends(){return this.friends;}
}
