import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { WelcomeComponent } from "./home/welcome.component"
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    // removed as part of refactor to separate feature module, ProductModule
    // ProductListComponent,
    // ConvertToSpacesPipe,
    // StarComponent,
    // ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule // if we want to use /#/products hash-style routes, syntax: .forRoot([], {useHash: true })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
