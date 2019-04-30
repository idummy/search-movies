// valid example of api call "http://www.omdbapi.com/?apikey=4d460387&t=batman"

import { Component } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { SearchMoviesService } from "./search-movies.service";
import { Observable } from "rxjs/Observable";
import { stringify } from "@angular/core/src/util";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private movieService: SearchMoviesService) {}
  ngOnInit() {}
  private searchterm: string = "";
  private params: HttpParams;
  public api = "http://www.omdbapi.com/";
  private apiKey = "4d460387";
  private url: string;
  private apiCallResult: Observable<any>;
  private movies = [];
  private error: string;

  search() {
    let url = this.api + "?" + "apikey" + "=" + this.apiKey + "&";
    this.params = new HttpParams().set("s", this.searchterm);
    this.url = new String(url).concat(this.params.toString());
    console.log("request url......: " + this.url);
    this.apiCallResult = this.movieService.search(this.url);
    this.fetchResults();
  }
  fetchResults() {
    let searchResponse: string;
    this.apiCallResult.subscribe(
      // subscription
      res => {
        searchResponse = res.Response;

        // console.log("searchResponse.toUpperCase:  "+searchResponse.toUpperCase());
        // console.log("true".toUpperCase());

        if (searchResponse.toUpperCase() === "true".toUpperCase()) {
          this.movies = res.Search;
        } else {
          this.error = res.Error;
        }
      },
      // in case of error
      error => console.log(error),
      // completion
      () => this.method()
    );
  }
  method() {
    console.log(this.movies);
  }
}
