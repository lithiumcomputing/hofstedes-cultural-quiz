import { Component, OnInit } from '@angular/core';
import { Questions } from './quiz.questions';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.formdata = new FormGroup({ })
  }

  // Quiz Variables
  questions = Questions.questions
  questionIndex = 0
  quizScore = {
    "idv": 0,
    "pdi": 0,
    "mas": 0,
    "uai": 0
  }
  
  beginQuiz (event) {
    // Clear Quiz Descriptions
    let quizDescriptions = document.getElementsByClassName("quizDescription");
    for (let index = 0;index < quizDescriptions.length;index += 1) {
      let element = quizDescriptions[index];
      element.innerHTML = "";
      element.style.visibility = "hidden";
    }
    let beginQuizButton = document.getElementById("beginQuizBtn");
    beginQuizButton.style.visibility = "hidden";
    
    // Set up the first question + Form
    this.questionIndex = 0;
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = 
      this.questions[this.questionIndex]["question"];
    document.getElementById("questionForm").style.visibility = "visible";
  }

  submitResponse(scoreFactor) {
    let questionData = this.questions[this.questionIndex];
    this.quizScore["idv"] += questionData["idv"] * scoreFactor;
    this.quizScore["pdi"] += questionData["pdi"] * scoreFactor;
    this.quizScore["mas"] += questionData["mas"] * scoreFactor;
    this.quizScore["uai"] += questionData["uai"] * scoreFactor;
    this.questionIndex += 1;
    
    if (this.questionIndex >= this.questions.length) {
      document.getElementById("question").style.visibility = "hidden";
      document.getElementById("questionForm").style.visibility = "hidden";
      document.getElementById("results").innerHTML = JSON.stringify(this.quizScore);
    }
    
    else {
      let questionElement = document.getElementById("question");
      questionElement.innerHTML = 
      this.questions[this.questionIndex]["question"];
    }
  }
}
