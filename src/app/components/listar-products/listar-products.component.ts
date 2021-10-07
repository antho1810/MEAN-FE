import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-listar-products',
  templateUrl: './listar-products.component.html',
  styleUrls: ['./listar-products.component.css']
})
export class ListarProductsComponent implements OnInit {
  listProducts: Product[] = [];

  constructor(private _productService: ProductService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerPrducts();
  }

  obtenerPrducts(){
    this._productService.getProducts().subscribe(data =>{
      console.log(data);
      this.listProducts = data;
    }, error => {
      console.log(error);
    })
  }

  deleteProduct(id: any){
    this._productService.deleteProduct(id).subscribe(data =>{
      this.toastr.error('El producto fue eliminado con exito', "Producto Eliminado");
      this.obtenerPrducts();
    }, error => {
      console.log(error);
    });
  }

}
