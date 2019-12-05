import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var results = this.getGETParameters();
    
    // Adjust the Graphs so that the results match.
    document.getElementById("idv-bar").innerHTML +=
      '<rect id="idv-score-bar" width="'
    + String((results["idv"] + 100.0)/2) +
      '%" height="100" style="fill:rgb(255,255,0);stroke-width:3;stroke:rgb(0,0,0)" />';
    
    document.getElementById("pdi-bar").innerHTML += 
      '<rect id="pdi-score-bar" width="'
        + String((results["pdi"] + 100.0)/2) + 
        '%" height="100" style="fill:rgb(255,0,0);stroke-width:3;stroke:rgb(0,0,0)" />';
    
    document.getElementById("mas-bar").innerHTML += 
      '<rect id="pdi-score-bar" width="'
        + String((results["mas"] + 100.0)/2) + 
    '%" height="100" style="fill: rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />';
    
    document.getElementById("uai-bar").innerHTML += 
      '<rect id="uai-score-bar" width="'
        + String((results["uai"] + 100.0)/2) + 
        '%" height="100" style="fill:rgb(128,128,128);stroke-width:3;stroke:rgb(0,0,0)" />';
  }
  
  getGETParameters() {
    var result = {};
    var tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          result[tmp[0]] = Number(decodeURIComponent(tmp[1]));
        });
    return result;
  }

}
