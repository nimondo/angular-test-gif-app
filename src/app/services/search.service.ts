import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url : string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }
  getSearch(term:String) {
    this.httpClient
    .get<any>(`${this.url}${term}&limit=25&offset=0&rating=g&lang=en`)
    .subscribe(
      (response) => {
        console.log(response);
          return response;
      },
      (error) => {
        console.log('Erreur ! : ' + error.message);
      }
    ); 
  }
  getSearchResult(term:String) {
    return new Promise(
      (resolve, reject) => {
        const promise = this.httpClient.get(`${this.url}${term}&limit=25&offset=0&rating=g&lang=en`).toPromise();
    promise.then(
          (data) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }
 
}
