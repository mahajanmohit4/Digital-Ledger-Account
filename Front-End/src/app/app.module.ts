import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboradComponent } from './components/dashborad/dashborad.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { AuthGuard } from './services/auth.guard';
import { AuthInterceptor } from './services/auth.interceptor';
import { RegistrationComponent } from './components/registration/registration.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { UpdatecategoryComponent } from './components/updatecategory/updatecategory.component';
import { ProjectdetailsComponent } from './components/projectdetails/projectdetails.component';
import { CartComponent } from './components/cart/cart.component';


 



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    DashboradComponent,
    LoginComponent,
    RegistrationComponent,
    CategoryComponent,
    ProductlistComponent,
    AddproductComponent,
    UpdateproductComponent,
    UpdatecategoryComponent,
    ProjectdetailsComponent,
    CartComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
