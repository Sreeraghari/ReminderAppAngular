import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userid=""
  uname=""

  eventForm=this.fb.group({
    date:['',[Validators.required]],
    descr:['',[Validators.required]]
  })

  constructor(private fb:FormBuilder,private ms:MainService) { 

    if (localStorage.getItem('currentId')) {

      this.userid = JSON.parse(localStorage.getItem('currentId') || '')
      this.uname = JSON.parse(localStorage.getItem('currentUser') || '')
    }
  }
  ngOnInit(): void {
  }


  addEvent() {

    var date = this.eventForm.value.date
    var descr = this.eventForm.value.descr

    if (this.eventForm.valid) {
      this.ms.addEvent(this.userid,date,descr)
      // if(result)
      // {
      //   alert("added")
        
      // }
      // else{
      //   alert("not added")
      // }
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
          }
          else{
            alert(result.error.message)

          }

        })
          // (result) => {
          //   alert(result.error.message)
          // })
      // this.eventForm.reset()

    }
    else {
      alert("invalid form")
    }
  }


}
