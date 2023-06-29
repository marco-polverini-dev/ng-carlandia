import { Component, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LOCALES, Locale, getUsersLocale } from './locale.utils';

@Component({
  selector: 'app-locale-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './locale-selector.component.html',
  styleUrls: ['./locale-selector.component.scss'],
})
export class LocaleSelectorComponent {
  LOCALES: Locale[] = LOCALES;
  currentLocale: WritableSignal<Locale | undefined> = signal(undefined);

  constructor() {
    this.setLocale(getUsersLocale('en'));
  }

  setLocale(localeID: string) {
    const locale = this.LOCALES.find((l) => l.id === localeID);
    this.currentLocale.set(locale);
  }
}
