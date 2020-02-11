import { Component, OnInit, ViewChild } from "@angular/core";
import { TeamsService } from "./teams.service";
import { Placement, Team } from "../teamInterface";
import { ActivatedRoute } from "@angular/router";
import { IonSlides } from "@ionic/angular";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"]
})
export class DetailPage implements OnInit {
  placements: Team[];
  segment = 0;
  @ViewChild("slides", { static: true }) slider: IonSlides;

  constructor(private tService: TeamsService, private route: ActivatedRoute) {}

  async ngOnInit() {
    const res = await this.tService.getResults();
    const letter = this.route.snapshot.paramMap.get("id");
    for (const place of res) {
      if (place.letter == letter) {
        this.placements = place.ordered_teams;
      }
    }
  }
  async segmentChanged() {
    await this.slider.slideTo(this.segment);
  }

  async slideChanged() {
    this.segment = await this.slider.getActiveIndex();
  }
}
