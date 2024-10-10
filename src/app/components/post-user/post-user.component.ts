import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrl: './post-user.component.css'
})
export class PostUserComponent implements OnInit {

  postUserForm: FormGroup;

  constructor( private userService: UserService, private fb: FormBuilder){
    this.postUserForm = this.fb.group({})
  }

  ngOnInit(){
    this.postUserForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      emailAddress: [null, [Validators.required, Validators.email]]

    })
  }

  postUser(){
    console.log(this.postUserForm.value);
    this.userService.postUser(this.postUserForm.value).subscribe((res)=>{
      console.log(res);
    })
  }

}
