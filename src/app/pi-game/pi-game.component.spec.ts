import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiGameComponent } from './pi-game.component';

describe('PiGameComponent', () => {
  let component: PiGameComponent;
  let fixture: ComponentFixture<PiGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
