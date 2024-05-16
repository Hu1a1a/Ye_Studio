import { Component } from '@angular/core';
import { TranslateService } from 'src/service/translate.service';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.css']
})
export class LayoutHeaderComponent {
  constructor(public translate: TranslateService) { }
}
