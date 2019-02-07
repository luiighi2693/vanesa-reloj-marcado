import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate([window.sessionStorage.getItem('param') === 'ingreso' ? 'marcacion-ingreso' : 'marcacion-egreso']);
    }, 2000);
  }

}
