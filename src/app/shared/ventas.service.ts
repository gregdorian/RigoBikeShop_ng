import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clientes } from '../models/clientes';
import { Producto } from '../models/producto';
import { Venta } from '../models/Venta';
import { VentaItem } from '../models/VentaItem';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  formData!: Venta;
  ventaItems!: VentaItem[];

  baseApiUrl: string = "https://localhost:7123/";
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Clientes[]>{
     return this.http.get<Clientes[]>(this.baseApiUrl + 'clientes');
  }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.baseApiUrl + 'productos');
  }

  // postVenta() {
  //     this.http.post(this.baseApiUrl + 'api/venta').subscribe(data => {
  //       console.log(data);
  //     });
  // }

  // createVenta(venta: Venta): Observable<Venta>{
  //   return this.http.post(this.baseApiUrl + 'api/venta', venta);
  // }
}
