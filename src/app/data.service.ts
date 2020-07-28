import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    private nama;

  constructor() {
      this.nama = 'Very'
  }

  getNama(){
      return this.nama;
  }

  updateNama(data){
      this.nama = data;
  }
}
