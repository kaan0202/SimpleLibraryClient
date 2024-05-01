import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighboorHoodComponent } from './neighboor-hood.component';

describe('NeighboorHoodComponent', () => {
  let component: NeighboorHoodComponent;
  let fixture: ComponentFixture<NeighboorHoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeighboorHoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeighboorHoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
