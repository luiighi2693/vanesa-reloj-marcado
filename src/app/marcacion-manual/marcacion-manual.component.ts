import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcacion-manual',
  templateUrl: './marcacion-manual.component.html',
  styleUrls: ['./marcacion-manual.component.css']
})
export class MarcacionManualComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    getAction() {
        return window.sessionStorage.getItem('param');
    }
}
