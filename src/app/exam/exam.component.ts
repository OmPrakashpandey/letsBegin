import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  examTime: Date;
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
    this.startTimer(120)
  }

  progressbarValue = 100;
  curSec: number = 0;

  startTimer(seconds: number) {
    var d = new Date();
    if (seconds >= 3600)
      d.setHours(d.getHours() + seconds / (60 * 60));
    else if (seconds < 3600)
      d.setMinutes(d.getMinutes() + seconds / (60));
    this.examTime = new Date(d);
    const time = seconds;
    const timer$ = interval(1000);

    const sub = timer$.subscribe((sec) => {
      this.progressbarValue = 100 - sec * 100 / seconds;
      this.curSec = sec;

      if (this.curSec === seconds) {
        sub.unsubscribe();
      }
    });
  }
}
