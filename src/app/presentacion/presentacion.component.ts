import { Component } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css'],
})
export class PresentacionComponent {
  ahora = new Date().getTime();
  meet = new Date(2016, 4, 18).getTime();
  diff = (this.ahora - this.meet) / 1000 / 60 / 60 / 24;
}
