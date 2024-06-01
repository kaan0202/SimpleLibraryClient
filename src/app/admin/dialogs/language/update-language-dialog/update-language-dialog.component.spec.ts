import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLanguageDialogComponent } from './update-language-dialog.component';

describe('UpdateLanguageDialogComponent', () => {
  let component: UpdateLanguageDialogComponent;
  let fixture: ComponentFixture<UpdateLanguageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLanguageDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLanguageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
