import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { ServicesComponent } from './pages/services/services.component';
import { WebDesignComponent } from './pages/services/web-design/web-design.component';
import { WebDevelopementComponent } from './pages/services/web-developement/web-developement.component';
import { MobileDevelopementComponent } from './pages/services/mobile-developement/mobile-developement.component';
import { SeoComponent } from './pages/services/seo/seo.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutusComponent,
    ContactusComponent,
    NavComponent,
    FooterComponent,
    ServicesComponent,
    WebDesignComponent,
    WebDevelopementComponent,
    MobileDevelopementComponent,
    SeoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
