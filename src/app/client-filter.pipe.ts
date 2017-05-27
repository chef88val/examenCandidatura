import { Pipe, PipeTransform } from '@angular/core';
import { Client } from './client';

@Pipe({
  name: 'clientFilter',
  pure: false
})
export class ClientFilterPipe implements PipeTransform {

  transform(items: Client[], filter: Client): Client[] {
    if (!items || !filter) {
      return items;
    } 
    return items.filter((item: Client) => this.applyFilter(item, filter));
  }
  applyFilter(client: Client, filter: Client): boolean {
    for (let field in filter) {
      
      if (typeof filter[field] === 'string') {
       // console.log(Object.keys(filter).toString() === "friends")
      if (Object.keys(filter).toString() === "friends"){ console.log(client.friends.filter(item=> {console.log(item.toLowerCase().indexOf(filter.friends)===-1);  }));}     
      else if (client[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
          console.log( client.friends);//.friends.filter((item: Client) => item.friends.filter(item => { return item.toLowerCase().indexOf(filter.friends) !== -1; })) )
          return false;
        }
      } else if (typeof filter[field] === 'number') {
        if (client[field] !== filter[field]) {
          return false;
        }
      }
    }
    return true;
  }
}