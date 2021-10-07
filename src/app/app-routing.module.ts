import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductComponent } from './components/crear-product/crear-product.component';
import { ListarProductsComponent } from './components/listar-products/listar-products.component';

const routes: Routes = [
  {path: '', component: ListarProductsComponent},
  {path: 'crear-product', component: CrearProductComponent},
  {path: 'editar-product/:id', component: CrearProductComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
