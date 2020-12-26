import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor() { }
  questionTypes=[{id:"singleSelect", name:"Single Select"},{id:"multiSelect", name:"Muti Select"}];
  questions=[{type:"singleSelect",options:[{}]}]
  ngOnInit(): void {
  }
  save(){
    console.log("All Questions:-",this.questions)
  }

}
