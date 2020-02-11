import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subject } from "src/models/interfaces";
import { SubjectsService } from "src/app/subjects.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.page.html",
  styleUrls: ["./details.page.scss"]
})
export class DetailsPage implements OnInit {
  subj: Subject;
  constructor(
    public route: ActivatedRoute,
    private subService: SubjectsService
  ) {}

  async ngOnInit() {
    this.subj = await this.subService.getSubject(
      this.route.snapshot.paramMap.get("id")
    );
  }
}
