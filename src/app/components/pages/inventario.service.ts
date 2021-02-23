import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.interface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private productosCollection: AngularFirestoreCollection<Producto>;

  constructor(private afs: AngularFirestore) {
    this.productosCollection = afs.collection<Producto>('Productos');
   }

  public guardarProducto(producto: Producto){
    const productoObj = {
      codigo      : producto.codigo,
      nombre      : producto.nombre,
      marca       : producto.marca,
      modelo      : producto.modelo,
      medida      : producto.medida,
      anio        : producto.anio,
      distribuidor: producto.distribuidor,
      cantidad    : producto.cantidad,
      precio      : producto.precio,
      categoria   : producto.categoria,
      descripcion : producto.descripcion,
    };
      return this.productosCollection.add(productoObj);
  }

  obtenerProductos(): Observable <any>{
    return this.afs.collection('Productos').snapshotChanges();
  }

  obtenerUnProducto(codigo:InventarioService): Observable<InventarioService>{
    return this.afs.doc<InventarioService>(`Productos/${codigo}`).valueChanges();
  }
}
