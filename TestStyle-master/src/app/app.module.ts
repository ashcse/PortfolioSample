import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import bootstrap from "bootstrap";
import { AboutComponent } from './features/about/about.component';
import { ServiceComponent } from './features/service/service.component';
import { ContactComponent } from './features/contact/contact.component';
import { HomeComponent } from './features/home/home.component';
import { NavBarComponent } from './features/home/components/nav-bar/nav-bar.component';
import { BlogsComponent } from './features/blogs/blogs.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    HomeComponent,
    NavBarComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
