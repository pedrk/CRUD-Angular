import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { CrudComponent } from "./views/product/crud/crud.component";
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';


const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "produtos",
  component: CrudComponent
}, {
  path: "produtos/criar",
  component: ProductCreateComponent
}, {
  path: "produtos/editar/:id",
  component: ProductUpdateComponent
},{
  path: "produtos/deletar/:id",
  component: ProductDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
