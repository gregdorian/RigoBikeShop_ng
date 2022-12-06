export interface VentaItem {
    idFacturaDetalle: number;
    idFacturaEncabezado: number;
    idProducto: number;
    codigoProducto: string;
    nombreProducto: string;
    precioUnitario: number;
    cantidad: number;
    total: number;
}