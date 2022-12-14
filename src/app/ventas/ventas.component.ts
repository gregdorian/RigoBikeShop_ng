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
  formItems: VentaItem;
  currentDate!: Date;
  localDate: string;
  selCliente: any;
  nomCliente: string | undefined;
  dirCliente: string | undefined;
  telCliente: string | undefined;
  selProd: any;
  precioUnitario: number | undefined;

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
      nombreProducto: '',
      precioUnitario: 0,
      cantidad: 0,
      total: 0,
    }  
      this.service.getClientes().subscribe(data => {
      this.clients=data;
    });
  }



  clients!: Clientes[];
  products!: Producto[];

  ngOnInit(): void {

    this.service.getProductos().subscribe(data => {
      this.products=data;
    });
    this.resetForm();
    
  }
  onChange() {
    
    var selectedId =this.selCliente;
  
    var ob= this.clients.find(item => item.idCliente === parseInt(selectedId));

    this.nomCliente = ob?.nombreCliente;
    this.dirCliente = ob?.direccionCliente;
    this.telCliente = ob?.telefonoCliente;
   
}
onChangeProd(){

  var selectedProdId =this.selProd;

  var ob= this.products.find(item => item.idProducto === parseInt(selectedProdId));
  this.precioUnitario = ob?.precioUnitario;

  if(ob!=null && ob!=undefined && this.formItems.cantidad!=0){

    this.formItems.precioUnitario = ob.precioUnitario;
    this.formItems.idProducto = selectedProdId;
    this.formItems.nombreProducto=ob.nombreProducto;
    this.formItems.total = parseFloat((ob.precioUnitario * this.formItems.cantidad).toFixed(2));
  }

}

  Agregar(ventaItemsIndex:number, ventaId: number): void{
    var vi= ventaItemsIndex;
    var idv= ventaId;
   this.service.ventaItems.push(this.formItems);
 }

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
