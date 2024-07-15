import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ang-dir-deep-dive',
  standalone: true,
  imports: [NgIf, NgTemplateOutlet, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './ang-dir-deep-dive.component.html',
  styleUrl: './ang-dir-deep-dive.component.css'
})
export class AngDirDeepDiveComponent {
  constructor(){
    console.log(this.userObj.length);
  }
  userName: string = 'John doe';
  isAdmin: boolean = false;
  isMember: boolean = false;
  isGuest: boolean = true;

  loginCount: number = 0;


  userRole: string='Guest';

  users: Array<string>= ['Sowmya', 'Shreyansh', 'Girish'];

  userObj: Array<any>= [
    {id:1, name:'sowmya-obj', email:'sow@gmail.com'},
    {id:2, name:'shreyansh-obj', email:'shrey@gmail.com'}
  ]

  countLoginAttempte() {
    this.loginCount++;
    console.log(this.loginCount);
  }

  addNewUser() {
    let user = {id:4, name:'user1',email:'user@gmail.com'};
    this.userObj.push(user);
  }
  
  onDelete(user:object) {
    let index = this.userObj.indexOf(user);
    console.log(index);
    this.userObj.splice(index, 1);
  }

  onDeleteByIndex(index:number) {
   
    console.log('onDeleteByIndex' + index);
    this.userObj.splice(index, 1);
  }
}
