import { Component, OnInit } from "@angular/core";
import { TeamsService } from "./detail/teams.service";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page implements OnInit {
  letters: String[];
  constructor(
    private teamService: TeamsService,
    private navCtrl: NavController
  ) {}
  async ngOnInit() {
    this.letters = await this.teamService.getLeagues();
  }
  goToDetail(letter: String) {
    this.navCtrl.navigateForward(`tabs/tab2/detail/${letter}`);
  }
}
