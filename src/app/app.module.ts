import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { KontaktiComponent } from './components/kontakti/kontakti.component';
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  {path: '', component:CarComponent},
  {path: 'about', component:KontaktiComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    KontaktiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
