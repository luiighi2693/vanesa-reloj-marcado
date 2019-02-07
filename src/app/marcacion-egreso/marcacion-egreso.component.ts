import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcacion-egreso',
  templateUrl: './marcacion-egreso.component.html',
  styleUrls: ['./marcacion-egreso.component.css']
})
export class MarcacionEgresoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.sessionStorage.setItem('param', 'egreso');
  }

}
