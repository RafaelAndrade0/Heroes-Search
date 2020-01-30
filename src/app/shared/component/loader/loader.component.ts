import {
  Component,
  OnInit,
  ElementRef,
  ChangeDetectorRef
} from "@angular/core";
import { LoadingService } from "src/app/core/service/loading.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.css"]
})
export class LoaderComponent implements OnInit {
  loadingSubscription: Subscription;
  message: string;

  constructor(
    private readonly loadingService: LoadingService,
    private _elmRef: ElementRef,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this._elmRef.nativeElement.style.display = "none";
    this.loadingSubscription = this.loadingService.loading$
      .pipe()
      .subscribe((status: boolean) => {
        this._elmRef.nativeElement.style.display = status ? "block" : "none";
        this._changeDetectorRef.detectChanges();
      });
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}
