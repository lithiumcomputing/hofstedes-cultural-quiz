import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {path:"", component:HomepageComponent},
  {path:"quiz", component:QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const
RoutingComponent = [QuizComponent];