import { Component } from '@angular/core';

@Component({
  selector: 'app-one',
  // standalone: true,
  // imports: [],
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent {

  title = 'Task-2';
  firstName!: string;
  lastName!: string;
  selectany!: string;
  phoneNumber!: string;
  emailAddress!: string;

  toggleControls() {
    if (this.selectany !== 'phone') {
      this.phoneNumber = ''; 
      console.log(this.selectany);
    }
    if (this.selectany !== 'email') {
      this.emailAddress = ''; 
      console.log(this.selectany);
    }
  }
}
