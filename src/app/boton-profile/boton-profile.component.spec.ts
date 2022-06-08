import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonProfileComponent } from './boton-profile.component';

describe('BotonProfileComponent', () => {
  let component: BotonProfileComponent;
  let fixture: ComponentFixture<BotonProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
