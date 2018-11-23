import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FieldConfig } from './field.interface';
@Injectable({
    providedIn: 'root'
  })
  export class FormService {

    constructor(private http: HttpClient) {}

    getFormSchema() {
     let data: FieldConfig[];
    return this.http.get<FieldConfig[]>('my-json-server.typicode.com/richardscottncc/dynamicforms/schema', { observe: 'response'})
      .pipe(
        map(response => {
          data = response.body;
          console.log(data);
          return data;
        })
      );
    }
  }
