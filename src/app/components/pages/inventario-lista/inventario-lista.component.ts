import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../inventario.service';
import { Producto } from '../../models/producto.interface';

@Component({
  selector: 'app-inventario-lista',
  templateUrl: './inventario-lista.component.html',
  styles: [
  ]
})
export class InventarioListaComponent implements OnInit {

  constructor(private inventarioService: InventarioService) { }

  productos : any[] = [];

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.inventarioService.obtenerProductos().subscribe( data=> {
      this.productos = [];
      data.forEach((element:any) => {
        this.productos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.productos);
    })
  }

}
