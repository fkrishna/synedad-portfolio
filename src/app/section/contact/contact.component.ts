import { Component } from '@angular/core';

@Component({
  selector: 'contact-section',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactInformation = {
    booking:
    {
      name: 'Kervens Alexandre',
      email: 'Kervykervv@gmail.com',
      number: '407-607-2255'
    },
    management:
    {
      name: 'management Name',
      email: 'johndoe@management.com',
      number: '123-456-7890'
    },
    label:
    {
      name: 'Label Name',
      email: 'johndoe@label.com',
      number: '123-456-7890'
    }
  };

  constructor() { }

}
