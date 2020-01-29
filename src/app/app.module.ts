import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeModule } from "./modules/home/home.module";
import { AboutModule } from "./modules/about/about.module";
import { ContactModule } from "./modules/contact/contact.module";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { NavComponent } from './layout/nav/nav.component';

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
