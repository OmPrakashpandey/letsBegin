import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http'
//import { MessageService } from './message.service';
import { retry, catchError } from 'rxjs/operators';
import { Observable, } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiEndPoint = environment.apiEndPoint;
  constructor(private httpClient: HttpClient) { }

  get(path, paramObj?) {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    var paramWithHeaders = { headers }
    if (paramObj) {
      let httpParams = new HttpParams();
      Object.keys(paramObj).map(param => {
        httpParams.append(param, paramObj[param]);
      });
      paramWithHeaders["parmas"] = httpParams;
    }
    return this.httpClient.get(this.apiEndPoint + path, paramWithHeaders).toPromise();
     // .pipe(catchError(this.handleError));
  }
  getObservable(path, paramObj?) {

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    var paramWithHeaders = { headers }
    if (paramObj) {
      let httpParams = new HttpParams();
      Object.keys(paramObj).map(param => {
        httpParams.append(param, paramObj[param]);
      });
      paramWithHeaders["parmas"] = httpParams;
    }
    return this.httpClient.get(this.apiEndPoint + path, paramWithHeaders);
     // .pipe(catchError(this.handleError));
  }
  post(path, body) {
    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
    // });
    console.log("KKUH",this.apiEndPoint + path, body,body)
    return this.httpClient.post(this.apiEndPoint + path, body)
     // .pipe(catchError(this.handleError))
      .toPromise();
  }
  delete(path, paramObj?) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    var paramWithHeaders = { headers }
    if (paramObj) {
      let httpParams = new HttpParams();
      Object.keys(paramObj).map(param => {
        httpParams.append(param, paramObj[param]);
      });
      paramWithHeaders["parmas"] = httpParams;
    }
    return this.httpClient.delete(this.apiEndPoint + path, paramWithHeaders)
     // .pipe(catchError(this.handleError))
      .toPromise();
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
       console.log("KKKRRRRRRRRRRRRK",error);
     // this.messageService.showMessage(error.message,"eroor");
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      console.log("KKKK",error);
     // this.messageService.showMessage(error.message,"eroor");
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return errorMessage;
  }
}
