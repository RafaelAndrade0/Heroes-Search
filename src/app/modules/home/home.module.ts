import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./page/home/home.component";
import { SharedModule } from "src/app/shared/shared.module";
import { HeroSearchComponent } from "./page/home/hero-search/hero-search.component";

import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [HomeComponent, HeroSearchComponent],
  imports: [
    SharedModule,
    HomeRoutingModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class HomeModule {}
