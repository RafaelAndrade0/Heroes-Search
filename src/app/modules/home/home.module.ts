import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./page/home/home.component";
import { SharedModule } from "src/app/shared/shared.module";
import { HeroSearchComponent } from "./page/home/hero-search/hero-search.component";

import { HttpClientModule } from "@angular/common/http";
import { HeroesComponent } from './page/home/heroes/heroes.component';
import { HeroItemComponent } from './page/home/heroes/hero-item/hero-item.component';

@NgModule({
  declarations: [HomeComponent, HeroSearchComponent, HeroesComponent, HeroItemComponent],
  imports: [SharedModule, HomeRoutingModule, HttpClientModule]
})
export class HomeModule {}
