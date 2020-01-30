import { Component, OnInit, OnDestroy } from "@angular/core";
import { MarvelService } from "src/app/data/service/marvel.service";
import { Hero } from "src/app/data/schema/hero.model";
import { filter, concatMap, map, flatMap, delay } from "rxjs/operators";
import { LoadingService } from "src/app/core/service/loading.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
    private readonly marvelService: MarvelService,
    private readonly loadingService: LoadingService
  ) {}

  heroesMode: string = "box";

  heroes: Result[] = [];

  loadingStatus = false;

  sub: Subscription;

  ngOnInit() {
    this.sub = this.loadingService.loading$.subscribe(status => {
      this.loadingStatus = status;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  searchHero(heroName: string) {
    this.marvelService.getCharactersByName(heroName).subscribe(hero => {
      this.heroes = hero.data.results;
    });
  }

  changeMode(mode: string) {
    this.heroesMode = mode;
  }
}
