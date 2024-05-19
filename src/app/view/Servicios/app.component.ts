import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class ServiciosComponent {
  constructor(public translate: TranslateService) { }

} 
