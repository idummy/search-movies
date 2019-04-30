import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Movie, SearchResponse } from "./movies";

@Injectable()
export class SearchMoviesService {
  constructor(private http: Http) {}

  search(url: string){
    return this.http.get(url).map(res => res.json())
  }
}
