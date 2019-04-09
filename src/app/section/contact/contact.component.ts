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
      name: 'Farid Paul Abdella',
      email: 'Contact.vibedealerz@gmail.com',
      number: '+1 (786)-5161900'
    },
    label:
    {
      name: 'Vibe Dealerz',
      email: 'Contact.vibedealerz@gmail.com',
      number: '+1 (407)-607-2255'
    }
  };

  constructor() { }

}
