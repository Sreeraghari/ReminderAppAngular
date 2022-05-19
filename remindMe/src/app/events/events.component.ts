import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

userid:any
event:any

  constructor(private ms:MainService) {

        // View Event

        this.userid = JSON.parse(localStorage.getItem('currentId') || '')
        // console.log(this.userid);
        

        // Asynchronous
        this.ms.viewEvent(this.userid)
          .subscribe((result: any) => {
            if (result) {
              // console.log(result);
              
              this.event = result.Evnt
              // console.log(this.event);
              
            }
          },
            result => {
              alert(result.message)
            }
          )
    

   }

  ngOnInit(): void {
  }

}
