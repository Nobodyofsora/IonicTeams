import { Component, OnInit } from "@angular/core";
import { Team } from "../../teamInterface";
import { TeamsService } from "../teams.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"]
})
export class ResultsComponent implements OnInit {
  constructor(private tService: TeamsService) {}
  teams: Team[];

  async ngOnInit() {
    this.teams = await this.tService.getRealResults();
  }
}
