import { Injectable } from "@angular/core";
import { BehaviorSubject, pipe, of, Observable } from "rxjs";
import { delay, concatMap, debounce, map, mapTo } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class LoadingService {
  private loading = new BehaviorSubject<boolean>(false);
  loading$ = this.loading.asObservable();

  constructor() {}

  startLoading() {
    this.loading.next(true);
  }

  stopLoading() {
    this.loading.next(false);
  }
}
