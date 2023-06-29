import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSelectorComponent } from './locale-selector.component';

describe('LanguageSelectorComponent', () => {
  let component: LanguageSelectorComponent;
  let fixture: ComponentFixture<LanguageSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LanguageSelectorComponent],
    });
    fixture = TestBed.createComponent(LanguageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
