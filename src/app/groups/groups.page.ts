import { Component, OnInit } from "@angular/core";
import { Subject } from "src/models/interfaces";
import { SubjectsService } from "../subjects.service";
import { Brightness } from "@ionic-native/brightness/ngx";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-groups",
  templateUrl: "./groups.page.html",
  styleUrls: ["./groups.page.scss"]
})
export class GroupsPage implements OnInit {
  subjects: Subject[];
  showIt = true;
  constructor(
    private subService: SubjectsService,
    private brightness: Brightness,
    public navCtrl: NavController
  ) {}

  async ngOnInit() {
    this.subjects = await this.subService.getSubjects();
  }

  public changeBrightness(brightnessValue) {
    this.brightness.setBrightness(brightnessValue);
  }
  public goToDetails(id: String) {
    this.navCtrl.navigateForward(`tabs/groups/${id}`);
  }
}
