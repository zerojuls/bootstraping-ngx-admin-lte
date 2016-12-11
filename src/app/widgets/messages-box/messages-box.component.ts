import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Message } from '../../models/message';

@Component({
  selector: '.messagesBox',
  styleUrls: ['./messages-box.component.css'],
  templateUrl: './messages-box.component.html'
})
export class MessagesBoxComponent implements OnInit {
  // Declaring the variable for binding with initial value
  private messages: Message[];

  constructor(private _msg_serv: MessagesService) {
    this.messages = [];
  }

  public ngOnInit() {
    // à chaque modification de message on change nos données
    this._msg_serv.messages.subscribe((msg: Message[]) => {
      console.log('reception de message');
      this.messages = msg;
    });
  }
}
