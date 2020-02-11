import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Placement, Team } from "../teamInterface";

@Injectable({
  providedIn: "root"
})
export class TeamsService {
  apiRoot = "https://worldcup.sfg.io/teams/";
  place = "group_results";
  results = "results";
  constructor(private httpClient: HttpClient) {}
  getResults() {
    return this.httpClient
      .get<Placement[]>(this.apiRoot + this.place)
      .toPromise();
  }
  getRealResults() {
    return this.httpClient.get<Team[]>(this.apiRoot + this.results).toPromise();
  }
  async getLeagues() {
    const res = await this.getResults();
    let array: String[] = [];
    for (const place of res) {
      array.push(place.letter);
    }
    return array;
  }
}
