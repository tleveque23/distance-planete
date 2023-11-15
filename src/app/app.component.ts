import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {SHARED} from './shared'
import {SelectButtonModule} from 'primeng/selectbutton'
import {TranslocoService} from '@ngneat/transloco'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SHARED, SelectButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  stateOptions: any[] = [{label: 'Français', value: 'fr'}, {label: 'English', value: 'en'}];
  langValue = 'fr'

  constructor(private translocoService: TranslocoService) {
  }

  onLangChange() {
    this.translocoService.setActiveLang(this.langValue)
  }
}
