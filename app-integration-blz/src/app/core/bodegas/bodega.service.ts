import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs';
import {
  IResponseBinLocationUbicaciones,
  IResponseBinLocationBodegas,
} from 'src/app/features/bodegas/interfaces/bodega';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BodegaService {
  constructor(private http: HttpClient) {}

  getBodegas() {
    return this.http
      .post<IResponseBinLocationBodegas>(
        `${environment.urlApi}bussines-one-bodega`,
        {}
      )
      .pipe(
        map((response) => response),
        catchError((error) => {
          throw error;
        })
      );
  }

  getUbicacionBodega(bodega: string) {
    return this.http.post<IResponseBinLocationUbicaciones>(
      `${environment.urlApi}bussines-one-ubicaciones`,
      {
        bodega: bodega,
      }
    );
  }
}
