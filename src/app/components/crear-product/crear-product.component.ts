import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-crear-product',
  templateUrl: './crear-product.component.html',
  styleUrls: ['./crear-product.component.css']
})
export class CrearProductComponent implements OnInit {
  productForm: FormGroup;
  titulo = "Crear Producto";
  id: String;

  constructor(private fb: FormBuilder, private router: Router,
     private toastr: ToastrService,
     private _productService: ProductService,
     private aRouter: ActivatedRoute) {
    this.productForm = this.fb.group({
      product: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.Editar();
  }

  agregarProducto(){
    const PRODUCT: Product ={
      nombre: this.productForm.get('product')?.value,
      categoria: this.productForm.get('categoria')?.value,
      ubicacion: this.productForm.get('ubicacion')?.value,
      precio: this.productForm.get('precio')?.value,
    }
    if(this.id !== null){
      // Editamos product
      this._productService.pulproduct(this.id, PRODUCT).subscribe(data => {
        this.toastr.info('El producto fue actualizado con exito!', 'Producto Registado');
        this.router.navigate(['/'])
      }, error => {
        console.log(error);
        this.productForm.reset();
      })
    } else {
      //agregamos product
      console.log(PRODUCT);
      this._productService.postProduct(PRODUCT).subscribe(data =>{
        this.toastr.success('¡El producto fue registrado con exito!', 'Product Registado!')
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.productForm.reset();
      })
    }



  }

  Editar(){
    if(this.id !== null){
     this.titulo = 'Editarproducto';
     this._productService.obtenerProduct(this.id).subscribe(data => {
      this.productForm.setValue({product: data.nombre,
      categoria: data.categoria,
      ubicacion: data.ubicacion,
      precio: data.precio})
     })
    }
  }

}
