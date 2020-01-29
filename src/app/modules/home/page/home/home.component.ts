import { Component, OnInit } from "@angular/core";
import { MarvelService } from "src/app/data/service/marvel.service";
import { Hero } from "src/app/data/schema/hero.model";
import { filter, concatMap, map, flatMap } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private readonly marvelService: MarvelService) {}

  heroesMode: string = "box";

  heroes: Result[] = [];

  ngOnInit() {}

  searchHero(heroName: string) {
    this.heroes = [];
    this.marvelService
      .getCharactersByName(heroName)
      .pipe(
        flatMap((root: RootObject) => root.data.results),
        filter(hero => hero.description !== "")
      )
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  // searchHero(heroName: string) {
  //   this.marvelService.getCharactersByName(heroName).subscribe(hero => {
  //     this.heroes = hero.data.results;
  //   });
  // }

  changeMode(mode: string) {
    this.heroesMode = mode;
  }
}
