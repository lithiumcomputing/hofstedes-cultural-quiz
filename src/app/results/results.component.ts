import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("results").innerHTML =
      this.getGETParameters();
  }
  
  getGETParameters() {
    var result = {};
    var tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          result[tmp[0]] = decodeURIComponent(tmp[1]);
        });
    return JSON.stringify(result);
  }

}
