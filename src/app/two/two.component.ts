import { Component } from '@angular/core';

@Component({
  selector: 'app-two',
  // standalone: true,
  // imports: [],
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent {
  firstName!: string;
  lastName!: string;
  selectedContactMethod!: string;
  phoneNumber!: string;
  emailAddress!: string;

  toggleControls() {
    if (this.selectedContactMethod !== 'phone') {
      this.phoneNumber = ''; // Clear phone number if not selected
    }
    if (this.selectedContactMethod !== 'email') {
      this.emailAddress = ''; // Clear email address if not selected
    }
  }
}
