
export interface Producto {
    codigo : string;
    nombre : string;
    marca  : string;
    modelo : string;
    medida?: string;
    anio   : string;
    distribuidor?: string;
    cantidad   : Int16Array;
    precio     : string;
    categoria  : string;
    descripcion: string;
}