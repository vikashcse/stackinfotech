import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { IndexComponent } from './pages/index/index.component';
import { ServicesComponent } from './pages/services/services.component';
import { WebDesignComponent } from './pages/services/web-design/web-design.component';
import { WebDevelopementComponent } from './pages/services/web-developement/web-developement.component';

const routes: Routes = 
[
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'index',component:IndexComponent},
  {path:'home',component:IndexComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:"services",component:ServicesComponent},
  {path:"webdev",component:WebDevelopementComponent},
  {path:"webdesign",component:WebDesignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
