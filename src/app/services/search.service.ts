import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url : string = environment.apiUrl;
  resultSubject = new Subject<any[]>();
  result;
  constructor(private httpClient: HttpClient) { }
  emitResult() {
    this.resultSubject.next(this.result);
  }
  getSearch(term:String) {
    this.httpClient
    .get<any>(`${this.url}${term}&limit=25&offset=0&rating=g&lang=en`)
    .subscribe(
      (response) => {
        this.result= response;
        this.emitResult();
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
