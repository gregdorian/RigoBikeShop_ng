export interface VentaItem {
    idFacturaDetalle: number;
    idFacturaEncabezado: number;
    idProducto: number;
    nombreProducto: string;
    precioUnitario: number;
    cantidad: number;
    total: number;
}