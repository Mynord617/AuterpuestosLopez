import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../models/producto.interface';
import { InventarioService } from '../inventario.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styles: [
  ]
})
export class InventarioComponent implements OnInit {

  constructor(private inventarioService: InventarioService,
              private router: Router, 
              private aRoute: ActivatedRoute) { }

              public nuevoProducto = new FormGroup({
                codigo    : new FormControl('', Validators.required),
                nombre    : new FormControl('', Validators.required),
                marca     : new FormControl('', Validators.required),
                modelo    : new FormControl('', Validators.required),
                medida    : new FormControl(''),
                anio      : new FormControl('', Validators.required),
                distribuidor: new FormControl('', Validators.required),
                cantidad   : new FormControl('', Validators.required),
                precio     : new FormControl('', Validators.required),
                categoria  : new FormControl('', Validators.required),
                descripcion: new FormControl('', Validators.required),
              })

  ngOnInit(): void {
  }

  agregarNuevoProducto(producto: Producto){
    this.inventarioService.guardarProducto(producto);
    this.router.navigate(['/lista'])
  }

  

}
