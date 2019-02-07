import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcacion-ingreso',
  templateUrl: './marcacion-ingreso.component.html',
  styleUrls: ['./marcacion-ingreso.component.css']
})
export class MarcacionIngresoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.sessionStorage.setItem('param', 'ingreso');
  }

}
