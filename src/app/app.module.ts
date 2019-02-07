import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { KeyboardComponent } from './keyboard/keyboard.component';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import { DemoComponent } from './demo/demo.component';
import { MarcacionIngresoComponent } from './marcacion-ingreso/marcacion-ingreso.component';
import { MarcacionManualComponent } from './marcacion-manual/marcacion-manual.component';
import { MarcacionEgresoComponent } from './marcacion-egreso/marcacion-egreso.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'marcacion-ingreso',
    component: MarcacionIngresoComponent
  },
  {
    path: 'marcacion-egreso',
    component: MarcacionEgresoComponent
  },
  {
    path: 'marcacion-manual',
    component: MarcacionManualComponent
  },
  {
    path: 'keyboard/:action',
    component: KeyboardComponent
  },
  {
    path: 'ingreso',
    component: IngresoComponent
  },
  { path: '',
    redirectTo: '/marcacion-ingreso',
    pathMatch: 'full'
  },
  { path: '**', component: MarcacionIngresoComponent }
];

@NgModule({
  declarations: [AppComponent, KeyboardComponent, DemoComponent, MarcacionIngresoComponent, MarcacionManualComponent, MarcacionEgresoComponent, IngresoComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent, KeyboardComponent]
})
export class AppModule {}
