import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  //styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _ListService:ListService) { }

  ngOnInit() {
    this._ListService.getClients().subscribe();
  }

}
