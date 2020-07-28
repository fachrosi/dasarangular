import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    private nama;
  constructor(
      private dataservice : DataService
  ) {
      this.nama = this.dataservice.getNama();
  }

  ngOnInit(): void {
  }

}
