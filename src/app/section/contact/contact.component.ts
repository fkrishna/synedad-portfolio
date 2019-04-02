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
      number: '+1 (407)-607-2255'
    },
    management:
    {
      name: 'Youri Pierre',
      email: 'ohndoe@management.com',
      number: '+1 (407)-757-6556'
    },
    label:
    {
      name: 'Vibe Dealers',
      email: 'Vibedealersmgmt@gmail.com',
      number: '+1 (407)-607-2255'
    }
  };

  constructor() { }

}
