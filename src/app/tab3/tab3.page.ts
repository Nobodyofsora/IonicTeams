import { Component, OnInit } from "@angular/core";
import { Socket } from "ngx-socket-io";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page implements OnInit {
  message = "";
  messages = [];
  currentUserName = "";
  show = false;
  constructor(private socket: Socket) {}
  ngOnInit(): void {
    this.socket.connect();
  }
  registration() {
    this.show = true;
    this.socket.emit("set-name", this.currentUserName);
  }
}
