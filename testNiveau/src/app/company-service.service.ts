
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  constructor(private httpClient: HttpClient) { }
  getCompagny() {
    return this.httpClient.get('http://www.mocky.io/v2/5cd44d643500006fa77a549c');
  }
}
