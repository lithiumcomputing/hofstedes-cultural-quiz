import { Component, OnInit } from '@angular/core';
import { Questions } from '../quiz/quiz.questions';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var results = this.getGETParameters();
    var totalScores = {
      "idv": 0,
      "pdi": 0,
      "mas": 0,
      "uai": 0
    }
    
    // Score the Results
    var questions = Questions.questions;
    for (var question of questions) {
      totalScores["idv"] += Math.abs(question["idv"]);
      totalScores["pdi"] += Math.abs(question["pdi"]);
      totalScores["mas"] += Math.abs(question["mas"]);
      totalScores["uai"] += Math.abs(question["uai"]);
    }
    
    var quizScores = {
      "idv": 50+50*(results["idv"]/totalScores["idv"]),
      "pdi": 50+50*(results["pdi"]/totalScores["pdi"]),
      "mas": 50+50*(results["mas"]/totalScores["mas"]),
      "uai": 50+50*(results["uai"]/totalScores["uai"])
    }
    
    for (var key in quizScores) {
      quizScores[key] = quizScores[key].toFixed(0);
    }

    // Adjust the Graphs so that the results match.
    document.getElementById("idv-bar").innerHTML +=
      '<rect id="idv-score-bar" width="'
    + String(quizScores["idv"]) +
      '%" height="100" style="fill:rgb(255,255,0);stroke-width:3;stroke:rgb(0,0,0)" />';
    document.getElementById("idv-score").innerHTML = quizScores["idv"] + '%';
    
    document.getElementById("pdi-bar").innerHTML += 
      '<rect id="pdi-score-bar" width="'
        + String(quizScores["pdi"]) + 
        '%" height="100" style="fill:rgb(255,0,0);stroke-width:3;stroke:rgb(0,0,0)" />';
    document.getElementById("pdi-score").innerHTML = quizScores["pdi"] + '%';
    
    document.getElementById("mas-bar").innerHTML += 
      '<rect id="pdi-score-bar" width="'
        + String(quizScores["mas"]) + 
    '%" height="100" style="fill: rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />';
    document.getElementById("mas-score").innerHTML = quizScores["mas"] + '%';
    
    document.getElementById("uai-bar").innerHTML += 
      '<rect id="uai-score-bar" width="'
        + String(quizScores["uai"]) + 
        '%" height="100" style="fill:rgb(128,128,128);stroke-width:3;stroke:rgb(0,0,0)" />';
    document.getElementById("uai-score").innerHTML = quizScores["uai"] + '%';
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
