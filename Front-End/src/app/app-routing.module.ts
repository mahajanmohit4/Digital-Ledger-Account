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
import { ReminderComponent } from './components/reminder/reminder.component';
import { BillComponent } from './components/bill/bill.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategorylistComponent } from './components/categorylist/categorylist.component';
import { ErrorComponent } from './components/error/error.component';


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
},
{
  path:"reminder", component:ReminderComponent, pathMatch:"full", canActivate:[AuthGuard]
},
{
  path:"bill", component:BillComponent, pathMatch:"full", canActivate:[AuthGuard]
},
{
  path:"forgetpass", component:ForgetpasswordComponent, pathMatch:"full"
},
{
  path:"about", component:AboutComponent, pathMatch:"full"
},
{
  path:"contact", component:ContactComponent, pathMatch:"full"
},
{
  path:"footer", component:FooterComponent, pathMatch:"full"
},
{
  path:"categorylist", component:CategorylistComponent, pathMatch:"full", canActivate:[AuthGuard]
},
{
  path:"**", component:ErrorComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
