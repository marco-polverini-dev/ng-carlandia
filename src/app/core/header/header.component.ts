import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocaleSelectorComponent } from '../locale-selector/locale-selector.component';
import { ThemeSelectorComponent } from '../theme-selector/theme-selector.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LocaleSelectorComponent, ThemeSelectorComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
