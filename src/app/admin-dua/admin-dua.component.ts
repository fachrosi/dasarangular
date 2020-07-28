import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-admin-dua',
  templateUrl: './admin-dua.component.html',
  styleUrls: ['./admin-dua.component.css']
})
export class AdminDuaComponent implements OnInit {

 public nama_service;
  constructor(
      private datas : DataService
  ) {
      this.nama_service = this.datas.getNama();
  }

  ngOnInit(): void {
  }

}
