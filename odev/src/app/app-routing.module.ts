import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  {path:'',redirectTo : 'anasayfa',pathMatch:'full'},
  {path:'anasayfa',component : HomeComponent},
  {path:'urunler',component : ProductComponent},
  {path:'hakkimizda',component : AboutComponent},
  {path:'urun-ekle',component : ProductAddForms1Component,canActivate:[LoginGuard]},
  {path:'urun-ekle-2',component : ProductAddForms2Component},
  {path:'urunler/kategori/:categoryId',component:ProductComponent},
  {path:'login',component : LoginComponent},
  {path:'sepet',component : CartComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
