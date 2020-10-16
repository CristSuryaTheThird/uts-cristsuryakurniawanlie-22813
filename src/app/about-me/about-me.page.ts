import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.page.html",
  styleUrls: ["./about-me.page.scss"],
})
export class AboutMePage implements OnInit {
  myImage: String =
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Qazwsxedcvfrbgtnhy.jpg";
  constructor() {}

  ngOnInit() {}
}
