import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { RouterModule, Routes, Router } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';


const appRoutes: Routes = [
  { path: '', 
  	component: SearchComponent 
  },
  { path: 'about', 
  	component: AboutComponent 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    AboutComponent,
    SearchComponent
  ],
  imports: [
  	RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
	constructor(private _router:Router){}
 }
