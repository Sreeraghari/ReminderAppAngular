import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-log-reg',
  templateUrl: './log-reg.component.html',
  styleUrls: ['./log-reg.component.css']
})
export class LogRegComponent implements OnInit {


    registerForm = this.Fb.group({

      // form array create
      uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      userid: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  
    })
  
    loginForm = this.Fb.group({

      userid: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  
  
    })
  

  constructor(private router:Router,private Fb:FormBuilder, private ms:MainService) { }



  ngOnInit(): void {
  }

  // Register

  register() {
    var uname = this.registerForm.value.uname
    var userid = this.registerForm.value.userid
    var pswd = this.registerForm.value.pswd

    if (this.registerForm.valid) {

      this.ms.register(uname, userid, pswd)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
            this.router.navigateByUrl("")
          }
        },
          (result) => {
            alert(result.error.message)
          }


        )
    }else{
      alert("invalid form")
    }
  }


  // Login

  login() {

    var userid = this.loginForm.value.userid
    var pswd = this.loginForm.value.pswd

    if (this.loginForm.valid) {

      // Asynchronous call -Login
      this.ms.login(userid, pswd)
        .subscribe((result: any) => {

          if (result) {

            localStorage.setItem('currentId',JSON.stringify(result.uid))
            localStorage.setItem('currentUser',JSON.stringify(result.Uname))

            alert(result.message)

            this.router.navigateByUrl("home")

          }
        },
          (result) => {
            alert(result.error.message)
          }


        )
    }
    else {
      alert("invalid form")
    }

  }


}
