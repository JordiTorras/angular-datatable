import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  singarcausamotivosResponse,
  singarcausamotivo,
} from './singarcausamotivo.type';

@Injectable({
  providedIn: 'root',
})
export class SingarcausamotivoService {
  url: string = '../../../../../assets/data.json';

  constructor(private http: HttpClient) {}

  f_leerJson(): Observable<singarcausamotivosResponse> {
    return this.http.get<singarcausamotivosResponse>(this.url);
  }
}
