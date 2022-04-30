import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {
    path:'codetofix',
    pathMatch: 'full',
    component:HomeComponent
  },
  {
    path: 'about',
    pathMatch:'full',
    component:AboutComponent
  },
  {
    path: 'contact',
    pathMatch:'full',
    component:ContactComponent
  },
  {
    path: '**',
    redirectTo: 'codetofix'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
