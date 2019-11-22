import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url : string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getSearcheResult(term:String){
    this.httpClient
    .get<any>(`${this.url}${term}&limit=25&offset=0&rating=g&lang=en`)
    .subscribe(
      (response) => {
        console.log(response);
          // this.typeId = response;
          return response;
      },
      (error) => {
        console.log('Erreur ! : ' + error.message);
        return error.message;
      }
    ); 
  }
}
