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

  formdata;
  questions = Questions.questions;
  questionIndex = 0
  
  beginQuiz (event) {
    // Clear Quiz Descriptions
    let quizDescriptions = document.getElementsByClassName("quizDescription");
    for (let element of quizDescriptions) {
      element.innerHTML = "";
    }
    let beginQuizButton = document.getElementById("beginQuizBtn");
    beginQuizButton.style.visibility = "hidden";
    
    // Set up the first question + Form
    this.questionIndex = 0;
    let questionElement = document.getElementById("question");
    questionElement.innerHTML = 
      this.questions[this.questionIndex]["question"];
    document.getElementById("questionForm").style.visibility = "visible"
  }

  onClickSubmit(value) {
    
  }
}
