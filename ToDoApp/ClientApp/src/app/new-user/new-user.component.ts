import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewUser } from './../../model/new-user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  public model: NewUser = new NewUser();
  constructor() { }

  ngOnInit() {
  }


  registerNewUser(modelObject: NgForm) {
    debugger;
    //save data to db
  }
}
