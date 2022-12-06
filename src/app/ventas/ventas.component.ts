import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Clientes } from '../models/clientes';
import { Producto } from '../models/producto';
import { Venta } from '../models/Venta';
import { VentaItem } from '../models/VentaItem';
import { VentasService } from '../shared/ventas.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styles: [
  ]
})
export class VentasComponent implements OnInit {
  formv!: FormGroup;
  formData!:Venta;
  formItems!: VentaItem;
  currentDate!: Date;
  localDate: string;
  selCliente: any;

constructor( public service: VentasService, private formBuilder: FormBuilder)
  {
    this.formv = this.formBuilder.group({
      Venta:['']
    });
    this.currentDate = new Date();
    this.localDate = this.currentDate.toLocaleDateString();
    this.formItems = {
      idFacturaDetalle: 0,
      idFacturaEncabezado: 0,
      idProducto: 0,
      codigoProducto: '',
      nombreProducto: '',
      precioUnitario: 0,
      cantidad: 0,
      total: 0,
    }
  }



  clients!: Clientes[];
  products!: Producto[];

  ngOnInit(): void {
    this.service.getClientes().subscribe(data => {
      console.log(data)
      this.clients=data;
    });
    this.service.getProductos().subscribe(data => {
      console.log(data)
      this.products=data;
    });
    this.resetForm();
    
  }
  onChange() {
    console.log(this.selCliente);
    // I want to do something here with the new selectedDevice, but what I
    // get here is always the last selection, not the one I just selected.
}

  Agregar(ventaItemsIndex:number, ventaId: number){
    var vi= ventaItemsIndex;
    var idv= ventaId;

    this.formItems.total = this.formItems.precioUnitario * this.formItems.cantidad;
 }
// Agregar(){}
 Registrar(){
  // form.resetForm(); form: NgForm
  // this.service.formData = {
  //   idEncabezado: 0,
  //   idDetalle: 0,
  //   idCliente: 0,
  //   numeroFactura: Math.floor(100000 + Math.random() * 900000).toString(),
  //   total: 0,
  //   fechaFactura: '',
  // };
  // this.service.ventaItems = [];
}

resetForm(form?: NgForm ) {
 if (form != null)
    form.resetForm();
  this.service.formData = {
    idEncabezado: 0,
    idDetalle: 0,
    idCliente: 0,
    numeroFactura: Math.floor(100000 + Math.random() * 900000).toString(),
    total: 0,
    fechaFactura: '',
  };
  this.service.ventaItems = [];
}



}
