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
    
  }

  // Quiz Variables
  questions = Questions.questions
  numOfQuestions = this.questions.length
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
      var element = quizDescriptions[index];
      element.innerHTML = "";
      (element as HTMLElement).style.display = "none";
    }
    let beginQuizButton = document.getElementById("beginQuizBtn");
    beginQuizButton.style.display = "none";
    
    // Set up the first question + Form
    this.questionIndex = 0;
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = "1. " +
      this.questions[this.questionIndex]["question"];
    document.getElementById("questionForm").style.display = "block";
  }

  submitResponse(scoreFactor) {
    let questionData = this.questions[this.questionIndex];
    this.quizScore["idv"] += questionData["idv"] * scoreFactor;
    this.quizScore["pdi"] += questionData["pdi"] * scoreFactor;
    this.quizScore["mas"] += questionData["mas"] * scoreFactor;
    this.quizScore["uai"] += questionData["uai"] * scoreFactor;
    this.questionIndex += 1;
    
    if (this.questionIndex >= this.questions.length) {
      window.location.href = "/results?idv=" +
      this.quizScore["idv"] + "&pdi=" + this.quizScore["pdi"] +
      "&mas=" + this.quizScore["mas"] + "&uai=" + this.quizScore["uai"];    
    }
    
    else {
      let questionElement = document.getElementById("question");
      questionElement.innerHTML = String(this.questionIndex+1) + ". " +
        this.questions[this.questionIndex]["question"];
    }
  }
}
