import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/helpers/error-state-matcher';
import { Message } from 'src/app/models/models';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  constructor(private _messageService: MessageService) { }
  name_surname = new FormControl('', [
    Validators.required
  ]);
  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  messageCtrl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();
  messageSendResult: string;
  ngOnInit(): void {
  }

  send() {
    let message = new Message();
    message.name_surname = this.name_surname.value;
    message.email = this.email.value;
    message.body = this.messageCtrl.value;
    return this._messageService.send(message).
      subscribe((result) => {
        this.messageSendResult = result;
        this.clearResult();
      })
  }
  clearResult() {
    setTimeout(() => {
      this.messageSendResult = '';
    }, 5000);
  }
  isFormValid(): boolean {
    return this.name_surname.valid && this.email.valid && this.messageCtrl.valid;
  }

}
