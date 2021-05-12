import { Component, HostListener, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-dash-admin',
  templateUrl: './dash-admin.component.html',
  styleUrls: ['./dash-admin.component.css']
})



export class DashAdminComponent implements OnInit {
/////////////////////Pregunta un alert si vas a salir de la pagina y borrar el cookie  del admin//////
  @HostListener("window:beforeunload", ["$event"]) beforeUnloadHandler(event: Event) {
    console.log("window:beforeunload");

   event.returnValue = "You will leave this page" as any;
    this.cookieToken.delete('Token')
  }

 // @HostListener("window:unload", ["$event"]) unloadHandler(event: Event) {
  //  console.log("window:unload");
   // alert("Hello");
  //}
        
       


  constructor(private cookieToken:CookieService) {}

  ngOnInit(): void {
  } 
  
}
function unloadHandler(event: Event, Event: { new(type: string, eventInitDict?: EventInit): Event; prototype: Event; readonly AT_TARGET: number; readonly BUBBLING_PHASE: number; readonly CAPTURING_PHASE: number; readonly NONE: number; }) {
  throw new Error('Function not implemented.');
}

