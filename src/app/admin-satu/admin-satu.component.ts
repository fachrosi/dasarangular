import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-admin-satu',
  templateUrl: './admin-satu.component.html',
  styleUrls: ['./admin-satu.component.css']
})
export class AdminSatuComponent implements OnInit {
    public nama;
    public nama_service;
  constructor(
      private datas : DataService
  ) {
      this.nama_service = this.datas.getNama();
  }

  ngOnInit(): void {
  }

  update(){
      this.datas.updateNama(this.nama)
      //this.nama_service = this.datas.getNama()
  }

}
