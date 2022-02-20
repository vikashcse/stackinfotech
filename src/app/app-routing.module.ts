import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { IndexComponent } from './pages/index/index.component';
import { BackendComponent } from './pages/services/backend/backend.component';
import { CloudComponent } from './pages/services/cloud/cloud.component';
import { CsdComponent } from './pages/services/csd/csd.component';
import { DsdComponent } from './pages/services/dsd/dsd.component';
import { FontendComponent } from './pages/services/fontend/fontend.component';
import { ItAuditAndConsultingComponent } from './pages/services/it-audit-and-consulting/it-audit-and-consulting.component';
import { ReserchAndDevelopementComponent } from './pages/services/reserch-and-developement/reserch-and-developement.component';
import { SdcComponent } from './pages/services/sdc/sdc.component';
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
  {path:"webdesign",component:WebDesignComponent},
  {path:'r&d',component:ReserchAndDevelopementComponent},
  {path:'audit&consulting',component:ItAuditAndConsultingComponent},
  {path:'software_developement',component:SdcComponent},
  {path:'custom_software_developement',component:CsdComponent},
  {path:'dedicate_software_developement',component:DsdComponent},
  {path:'cloud',component:CloudComponent},
  {path:'frontend',component:FontendComponent},
  {path:'backend',component:BackendComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
