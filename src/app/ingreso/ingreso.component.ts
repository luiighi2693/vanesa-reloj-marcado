import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  action: any;

  constructor(private router:Router) { }

  ngOnInit() {
    this.action = window.sessionStorage.getItem('param');
    setTimeout(() => {
      this.router.navigate([this.action === 'ingreso' ? 'marcacion-ingreso' : 'marcacion-egreso']);
    }, 3000);
  }

}
