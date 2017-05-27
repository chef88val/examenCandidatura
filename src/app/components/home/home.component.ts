import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { ClientFilterPipe } from '../../client-filter.pipe';

import { Client } from '../../client';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'//,
  //pipes: [ClientFilterPipe]
  //styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  txtfilter:string = "";
  client: Client[];
  filter: Client = new Client();
  constructor(private _ListService:ListService) { 
    
  }

  ngOnInit() {
    this._ListService.getClients().subscribe(  (client: Client[])=>{this.client = client;}  );
    
   /* this._ListService.getClients().subscribe(data =>{
      console.log(data)
    });*/
  }

  findClient(){
    this._ListService.getClients().subscribe();
  }
  setFriend( param:string ){
    this.filter.name =param;
  }
  setProfe( param:string ){
    //this.filter.professions =param;
    console.log(param);
  }
  


}
