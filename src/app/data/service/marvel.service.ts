import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Md5 } from "ts-md5/dist/md5";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MarvelService {
  constructor(private readonly http: HttpClient) {}

  getCharactersByName(name: string = "spider-man") {
    const ts = Date.now().toString();
    const md5 = new Md5();

    md5
      .appendStr(ts)
      .appendStr(environment.PRIVATE_KEY)
      .appendStr(environment.PUBLIC_KEY);

    return this.http.get<RootObject>(
      `${
        environment.BASE_ENDPOINT
      }v1/public/characters?nameStartsWith=${name}&ts=${ts}&apikey=${
        environment.PUBLIC_KEY
      }&hash=${md5.end()}`
    );
  }
}
