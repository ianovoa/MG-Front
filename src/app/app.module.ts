import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MgNavBarComponent } from './components/mg-nav-bar/mg-nav-bar.component';
import { MgFooterComponent } from './components/mg-footer/mg-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MgNavBarComponent,
    MgFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
