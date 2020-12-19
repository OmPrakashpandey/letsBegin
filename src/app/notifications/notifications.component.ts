import { Component, OnInit } from '@angular/core';
import { MessageService } from '../common/message.service';
declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
message:any;
  constructor(message:MessageService) { 
    this.message=message;
  }
  test(){
    this.message.showNotification('1','top','left')
  }
  ngOnInit() {
  }

}
