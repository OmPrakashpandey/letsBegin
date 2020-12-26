import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  constructor() { }
  questions = [{
    type: "singleSelect", question: 'Who is the first prime minister of India?', options: [{ "value": "Om Prakash" }, { "value": "Vinay" },
    { "value": "Ankit Sri" }, { "value": "Pandit Javahar lal Nehru" }]
  },
  {
    type: "singleSelect", question: 'Latest Version of Angular?', options: [{ "value": "Angular 2" }, { "value": "Angular 4" },
    { "value": "Angular 9" }, { "value": "Angular 10.x" }]
  }];

  ngOnInit(): void {
  }

}
