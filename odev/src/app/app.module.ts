import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Angular Material
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
//Pagination
import {NgxPaginationModule} from 'ngx-pagination';
//HTTP
import {HttpClientModule} from '@angular/common/http';
//Angular carousel
import { CarouselModule } from 'ngx-owl-carousel-o';
//Alert
import {ToastrModule} from "ngx-toastr";
//Svg
import { AngularSvgIconModule } from 'angular-svg-icon';
//Guard
import { LoginGuard } from './login/login.guard';
//Services
import { AlertifyService } from './services/alertify.service';
import { AccountService } from './services/account.service';
//Pipes
import { ProductFilterPipe } from './product/product-filter.pipe';
import { VatAddedPipe } from './pipes/vat-added.pipe';
//Route
import { AppRoutingModule } from './app-routing.module';
//Components
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { TrendComponent } from './trend/trend.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavbarComponent,
    HeaderComponent,
    ProductComponent,
    CategoryComponent,
    FooterComponent,
    SummaryComponent,
    TrendComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    LoginComponent,
    VatAddedPipe,
    ProductFilterPipe,
    ProductAddForms1Component,
    ProductAddForms2Component,
    CartComponent,
  ],
  imports: [
    NgbModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    CommonModule,
    CarouselModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    [ HttpClientModule, AngularSvgIconModule.forRoot() ,
    NgbModule
  ],
  ],
  providers: [AlertifyService,AccountService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
