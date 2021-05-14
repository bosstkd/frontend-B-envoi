import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CalService {

  private httpHost = 'http://localhost:8090';

  constructor(private httpClient:HttpClient) { }
 //TODO a ne pas conserver
  public poid:number=0;
  public destination:string='';

  async calcul(poid:number, distination:string){
    return await this.httpClient.get(this.httpHost+'/api/depots/calcul?poid='+poid+'&&distination='+distination).toPromise();
  }


}
