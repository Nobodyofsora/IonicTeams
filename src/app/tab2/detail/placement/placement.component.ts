import { Component, OnInit, Input } from "@angular/core";
import { Team } from "../../teamInterface";

@Component({
  selector: "app-placement",
  templateUrl: "./placement.component.html",
  styleUrls: ["./placement.component.scss"]
})
export class PlacementComponent implements OnInit {
  constructor() {}
  @Input() teams: Team[];
  ngOnInit() {}
}
