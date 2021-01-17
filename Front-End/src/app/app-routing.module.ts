import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboradComponent } from './components/dashborad/dashborad.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { RegistrationComponent } from './components/registration/registration.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { UpdateproductComponent } from './components/updateproduct/updateproduct.component';
import { UpdatecategoryComponent } from './components/updatecategory/updatecategory.component';
import { ProjectdetailsComponent } from './components/projectdetails/projectdetails.component';
import { CartComponent } from './components/cart/cart.component';
import { CustomerComponent } from './components/customer/customer.component';


const routes: Routes = [
{
  path:'', component:HomeComponent, pathMatch:'full'
},
{
  path:"login", component:LoginComponent, pathMatch:"full"
},
{
  path:"dashboard", component:DashboradComponent, pathMatch:"full", canActivate:[AuthGuard]
},
{
  path:"registration", component:RegistrationComponent, pathMatch:"full"
},
{
  path:"category", component:CategoryComponent, pathMatch:"full", canActivate:[AuthGuard]
},
{
  path:"productlist", component:ProductlistComponent, pathMatch:"full", canActivate:[AuthGuard]
},
{
  path:"addproduct", component:AddproductComponent, pathMatch:"full", canActivate:[AuthGuard]
},
{
  path:"updateproduct/:id", component:UpdateproductComponent, canActivate:[AuthGuard]
},
{
  path:"updatecategory/:id", component:UpdatecategoryComponent, pathMatch:"full", canActivate:[AuthGuard]
},
{
  path:"productdetails", component:ProjectdetailsComponent, pathMatch:"full", canActivate:[AuthGuard]
},
{
  path:"cart", component:CartComponent, pathMatch:"full", canActivate:[AuthGuard]
},
{
  path:"customer", component:CustomerComponent, pathMatch:"full", canActivate:[AuthGuard]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
