import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  lastRefresh = new Date();
  myForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      username: new FormControl('',[
        Validators.required,
        Validators.minLength(4)
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]+$')
      ]),
      email: new FormControl('',[Validators.required,Validators.email]), //or Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      role: new FormControl('')
    });
  }
  onSubmit(){
    console.warn(this.myForm.value);
  }

  get name() { return this.myForm.get('name'); }

  get power() { return this.myForm.get('power'); }

}
