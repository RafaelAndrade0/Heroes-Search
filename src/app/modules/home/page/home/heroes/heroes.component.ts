import { Component, OnInit, Input } from "@angular/core";
import { fadeAnimation } from "src/app/shared/animation/fade.animation";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"],
  animations: [fadeAnimation]
})
export class HeroesComponent implements OnInit {
  constructor() {}

  list = [
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 }
  ];

  @Input() mode: "card" | "box" = "box";
  @Input() heroes: Result[];
  @Input() loadingStatus = false;

  ngOnInit() {}
}
