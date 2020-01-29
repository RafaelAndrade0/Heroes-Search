import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Hero } from "src/app/data/schema/hero.model";

@Component({
  selector: "app-hero-search",
  templateUrl: "./hero-search.component.html",
  styleUrls: ["./hero-search.component.css"]
})
export class HeroSearchComponent implements OnInit {
  constructor() {}

  @Output() searchHero = new EventEmitter<string>();
  @Output() heroesMode = new EventEmitter<string>();

  ngOnInit() {}

  formSubmit(f: Hero) {
    this.searchHero.emit(f.heroName);
  }

  changeMode() {
    this.heroesMode.emit("card");
  }
}
